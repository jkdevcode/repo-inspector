import type { AnalysisResult } from "../types/analysis";

/**
 * Generates the prompt string with instructions and structured project data.
 */
export function generatePrompt(analysis: AnalysisResult): string {
    return `
Analyze the following project data gathered by Repo Inspector.
Provide structured insights, high-level architecture recommendations, code quality improvements, and dependency risks.
Focus on identifying potential security vulnerabilities, scaling bottlenecks, and structural issues based on the stack and dependency data.

### Project Data
\`\`\`json
${JSON.stringify(analysis.results, null, 2)}
\`\`\`

### Output Format Schema (JSON strictly)
You MUST return ONLY a JSON object that matches this TypeScript interface EXACTLY:

interface AIReport {
  "architectureImprovements": string[]; // Minimum 3 actionable suggestions for the architecture
  "dependencyRisks": string[]; // Minimum 2 risks associated with current dependencies or versions
  "codeQualityInsights": string[]; // Minimum 3 insights regarding the code structure based on stack/dependencies
  "executiveSummary": string; // A concise paragraph summarizing project health and next steps. Make it professional.
}

Do NOT include any markdown blocks (like \`\`\`json) in your response. Just pure JSON object.
`;
}