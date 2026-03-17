import { dependencyAnalyzer } from "../analyzers/dependency/analyzer";

export async function runAnalysis() {
  console.log("Running analysis...");

  const result = await dependencyAnalyzer.analyze();

  console.log("Result:");
  console.log(result.summary);
}