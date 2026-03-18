export interface AnalyzerResult {
  id: string;
  summary: string;
  data: any;
  metrics?: Record<string, number>;
  warnings?: string[];
  insights?: string[];
}

export interface AIReport {
  architectureImprovements: string[];
  dependencyRisks: string[];
  codeQualityInsights: string[];
  executiveSummary: string;
}

export interface AnalysisResult {
  results: AnalyzerResult[];
  timestamp: string;
  aiReport?: AIReport | null; // Properly integrated AI Report
}

export type OutputFormat = "console" | "json";

export interface AnalysisOptions {
  format: OutputFormat;
}