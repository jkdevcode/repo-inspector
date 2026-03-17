import { writeFileSync, mkdirSync, existsSync } from "fs";
import { join } from "path";
import type { AnalysisResult } from "../types/analysis";

export function jsonReporter(analysis: AnalysisResult) {
  const dir = join(process.cwd(), "reports");

  // crear carpeta si no existe
  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  const filePath = join(dir, "repo-inspector-report.json");

  writeFileSync(filePath, JSON.stringify(analysis, null, 2));

  console.log("📁 Report saved in /reports/repo-inspector-report.json");
}
