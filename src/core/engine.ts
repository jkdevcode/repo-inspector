import { dependencyAnalyzer } from "../analyzers/dependency/analyzer";
import { stackAnalyzer } from "../analyzers/stack/analyzer";
import { runReporter } from "../reporters";
import { generateAIReport } from "../ai/ai.service";
import type { AnalysisResult, AnalysisOptions } from "../types/analysis";

export async function runAnalysis(options: AnalysisOptions) {
  const results = [];

  const depResult = await dependencyAnalyzer.analyze();
  const stackResult = await stackAnalyzer.analyze();

  results.push(depResult, stackResult);

  const analysis: AnalysisResult = {
    results,
    timestamp: new Date().toISOString(),
  };

  const aiReport = await generateAIReport(analysis);

  if (aiReport) {
      analysis.aiReport = aiReport;
  }
  
  runReporter(options.format, analysis);
}
