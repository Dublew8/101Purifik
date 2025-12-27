
import { GoogleGenAI, Type } from "@google/genai";
import { QuoteRequest, QuoteResult } from "../types";

export const generateSmartQuote = async (request: QuoteRequest): Promise<QuoteResult> => {
  // Always use named parameter for apiKey and ensure process.env.API_KEY is used directly
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `
    Act as a Senior Facilities Strategy Consultant for Purifik Clean. 
    Generate a high-level corporate cleaning and workforce deployment strategy for:
    Sector: ${request.industry}
    Facility Size: ${request.sqft} sq ft
    Frequency: ${request.frequency}
    Constraints: ${request.specialRequirements}

    The response must be highly professional and emphasize compliance (OSHA, HIPAA, or Sector-specific standards).
    Focus on operational efficiency and risk mitigation.
  `;

  // Upgraded to gemini-3-pro-preview for complex reasoning task as per guidelines
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          estimatedMonthlyCost: { 
            type: Type.NUMBER,
            description: "Total estimated monthly cost in USD"
          },
          recommendedStaffCount: { 
            type: Type.NUMBER,
            description: "Number of full-time staff members required"
          },
          suggestedSchedule: { 
            type: Type.ARRAY, 
            items: { type: Type.STRING },
            description: "Operational shifts and timing"
          },
          cleaningBluePrint: { 
            type: Type.STRING,
            description: "High-level strategy for site cleaning"
          },
          riskAssessment: { 
            type: Type.STRING,
            description: "Potential safety and compliance risks"
          },
          complianceCertifications: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Required industry standard certifications"
          }
        },
        required: ["estimatedMonthlyCost", "recommendedStaffCount", "suggestedSchedule", "cleaningBluePrint", "riskAssessment", "complianceCertifications"],
        propertyOrdering: ["estimatedMonthlyCost", "recommendedStaffCount", "suggestedSchedule", "cleaningBluePrint", "riskAssessment", "complianceCertifications"],
      },
    },
  });

  // Extracting text output from response correctly using the .text property
  const text = response.text;
  if (!text) throw new Error("No response from AI");
  
  return JSON.parse(text) as QuoteResult;
};
