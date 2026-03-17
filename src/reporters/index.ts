import { consoleReporter } from "./console";
import { jsonReporter } from "./json";
import type { AnalysisResult, OutputFormat } from "../types/analysis";

export function runReporter(
  format: OutputFormat,
  analysis: AnalysisResult
) {
  switch (format) {
    case "json":
      return jsonReporter(analysis);

    case "console":
    default:
      return consoleReporter(analysis);
  }
}