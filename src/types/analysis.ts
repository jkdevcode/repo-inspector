export interface AnalyzerResult {
  id: string;
  summary: string;
  data: any;
}

export interface AnalysisResult {
  results: AnalyzerResult[];
  timestamp: string;
}