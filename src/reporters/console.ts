import type { AnalysisResult } from "../types/analysis";

export function consoleReporter(analysis: AnalysisResult) {
  console.log("\n📊 Repo Inspector Report");
  console.log("==================================================\n");

  analysis.results.forEach((result) => {
    console.log(`🔍 [${result.id.toUpperCase()}]`);
    console.log(`   ${result.summary}`);
    
    if (result.metrics) {
      console.log(`   Metrics: ${JSON.stringify(result.metrics)}`);
    }

    if (result.warnings && result.warnings.length > 0) {
      console.log(`   Warnings:`);
      result.warnings.forEach((w) => console.log(`    ⚠️  ${w}`));
    }
    console.log("");
  });

    if (analysis.aiReport) {
    console.log("🤖 AI Insights");
    console.log("==================================================\n");
    
    console.log("💡 Executive Summary:");
    console.log(`   ${analysis.aiReport.executiveSummary}\n`);

    console.log("🏗️  Architecture Analysis:");
    analysis.aiReport.architectureAnalysis.forEach((i) => console.log(`   - ${i}`));
    console.log("");

    console.log("📦 Dependency Analysis:");
    analysis.aiReport.dependencyAnalysis.forEach((i) => console.log(`   - ${i}`));
    console.log("");

    console.log("✨ Code Quality:");
    analysis.aiReport.codeQuality.forEach((i) => console.log(`   - ${i}`));
    console.log("");

    console.log("🚀 Recommendations:");
    analysis.aiReport.recommendations.forEach((i) => console.log(`   - ${i}`));
    console.log("");

    console.log("📋 Project Classification:");
    console.log(`   Type: ${analysis.aiReport.projectClassification.type}`);
    console.log(`   Technologies: ${analysis.aiReport.projectClassification.technologies.join(", ")}`);
    console.log("");
  }
}