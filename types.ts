
export enum ServiceType {
  OFFICE = 'Office Cleaning',
  INDUSTRIAL = 'Industrial & Warehouse',
  SPECIALIZED = 'Specialized Sanitization',
  WORKFORCE = 'Workforce Solutions'
}

export interface QuoteRequest {
  industry: string;
  sqft: number;
  frequency: string;
  specialRequirements: string;
}

export interface QuoteResult {
  estimatedMonthlyCost: number;
  recommendedStaffCount: number;
  suggestedSchedule: string[];
  cleaningBluePrint: string;
  riskAssessment: string;
  complianceCertifications: string[];
}

export interface RatingSubmission {
  staffCode: string;
  rating: number;
  comment: string;
}

export interface StaffPerformanceSummary {
  staffCode: string;
  averageRating: number;
  totalRatings: number;
  recentComments: string[];
}

// Added SiteStatus and StaffMember interfaces to support Dashboard visualization components
export interface SiteStatus {
  name: string;
  cleaningProgress: number;
  staffOnSite: number;
  lastService: string;
  issues: number;
  sector: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  qualityScore: number;
  attendance: number;
  lastSafetyAudit: string;
  status: string;
}
