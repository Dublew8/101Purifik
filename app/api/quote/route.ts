
import { GoogleGenAI, Type } from "@google/genai";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

async function sendEmail(to: string, subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is missing. Skipping email.");
    return;
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: 'Purifik Clean <proposals@purifikclean.com>',
        to,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      console.error("Resend API error:", error);
    }
  } catch (err) {
    console.error("Failed to send email via Resend:", err);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
      companyName, 
      contactPerson, 
      email, 
      phone, 
      industry, 
      location, 
      services, 
      preferredSchedule,
      description
    } = body;

    // AI logic for smart estimations
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const prompt = `
      Act as a Senior Facilities Strategy Consultant for Purifik Clean. 
      Generate a professional corporate cleaning strategy for:
      Company: ${companyName}
      Sector: ${industry}
      Region: ${location}
      Requested Services: ${services.join(", ")}
      Schedule: ${preferredSchedule}
      Additional Client Context: ${description || "No specific requirements provided."}

      Respond with JSON.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedMonthlyCost: { type: Type.NUMBER },
            recommendedStaffCount: { type: Type.NUMBER },
            suggestedSchedule: { type: Type.ARRAY, items: { type: Type.STRING } },
            cleaningBluePrint: { type: Type.STRING },
            riskAssessment: { type: Type.STRING },
            complianceCertifications: { type: Type.ARRAY, items: { type: Type.STRING } }
          },
          required: ["estimatedMonthlyCost", "recommendedStaffCount", "suggestedSchedule", "cleaningBluePrint", "riskAssessment", "complianceCertifications"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");

    // Save to DB using the specific QuoteRequest model
    const savedRequest = await prisma.quoteRequest.create({
      data: {
        companyName,
        contactPerson,
        email,
        phone,
        industry,
        location,
        services: services.join(", "),
        preferredSchedule,
        aiEstimatedCost: result.estimatedMonthlyCost,
        aiStaffCount: result.recommendedStaffCount
      }
    });

    // --- Send Email to Client ---
    const clientHtml = `
      <div style="font-family: 'Inter', sans-serif; color: #1a1a1a; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 12px; overflow: hidden;">
        <div style="background-color: #0F4C81; padding: 40px; text-align: center; color: white;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800;">Purifik Clean</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.8;">Operational Blueprint Strategy</p>
        </div>
        <div style="padding: 40px;">
          <h2 style="font-size: 20px; font-weight: 700; margin-bottom: 20px;">Proposal Confirmation for ${companyName}</h2>
          <p>Dear ${contactPerson},</p>
          <p>Thank you for requesting an operational strategy from Purifik Clean. Our AI-driven analysis has generated a preliminary blueprint for your facility at <strong>${location}</strong>.</p>
          
          <div style="background-color: #f9fafb; padding: 25px; border-radius: 8px; margin: 30px 0;">
            <p style="margin: 0; font-size: 12px; font-weight: 800; color: #6b7280; text-transform: uppercase; letter-spacing: 0.1em;">Estimated Monthly Cost</p>
            <p style="margin: 5px 0; font-size: 32px; font-weight: 900; color: #2E8B57;">$${result.estimatedMonthlyCost.toLocaleString()}</p>
          </div>

          <h3 style="font-size: 16px; font-weight: 700;">Strategy Snapshot:</h3>
          <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">${result.cleaningBluePrint}</p>
          
          <p style="margin-top: 30px;">An account executive will review this data and contact you within 24 business hours to finalize the scope.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />
          <p style="font-size: 12px; color: #9ca3af;">Reference ID: ${savedRequest.id}</p>
        </div>
      </div>
    `;
    await sendEmail(email, `Strategy Proposal: ${companyName}`, clientHtml);

    // --- Send Alert to Admin ---
    const adminHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #0F4C81;">[New Lead Alert] Proposal Generated</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Company:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${companyName}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Contact:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${contactPerson} (${email})</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Industry:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${industry}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Location:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${location}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Services:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${services.join(", ")}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>AI Est. Cost:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">$${result.estimatedMonthlyCost}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>AI Staff Count:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${result.recommendedStaffCount}</td></tr>
        </table>
        <p style="margin-top: 20px;"><a href="https://purifikclean.com/admin" style="background: #0F4C81; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View in Dashboard</a></p>
      </div>
    `;
    await sendEmail('admin@purifikclean.com', `New Proposal Request: ${companyName}`, adminHtml);

    return NextResponse.json({ ...result, id: savedRequest.id });
  } catch (error) {
    console.error("Quote API Error:", error);
    return NextResponse.json({ error: "Operation failed" }, { status: 500 });
  }
}
