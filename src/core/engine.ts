import { dependencyAnalyzer } from "../analyzers/dependency/analyzer";
import { stackAnalyzer } from "../analyzers/stack/analyzer";
import { consoleReporter } from "../reporters/console";
import type { AnalysisResult } from "../types/analysis";

export async function runAnalysis() {
  const results = [];

  const depResult = await dependencyAnalyzer.analyze();
  const stackResult = await stackAnalyzer.analyze();

  results.push(depResult, stackResult);

  const analysis: AnalysisResult = {
    results,
    timestamp: new Date().toISOString(),
  };

  consoleReporter(analysis);
}
