import type { AnalysisResult } from "../types/analysis";

export function consoleReporter(analysis: AnalysisResult) {
    console.log("📊 Repo  Inspector Report\n");

    analysis.results.forEach((result) => {
        console.log(`🔍 ${result.id.toUpperCase()}`);
        console.log(result.summary);
        console.log("");
    });
    
}