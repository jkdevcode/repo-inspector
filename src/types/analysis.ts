export interface AnalyzerResult {
  id: string;
  summary: string;
  data: any;
}

export interface AnalysisResult {
  results: AnalyzerResult[];
  timestamp: string;
}

export type OutputFormat = "console" | "json";

export interface AnalysisOptions {
  format: OutputFormat;
}