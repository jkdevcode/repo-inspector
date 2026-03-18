import type { AnalysisResult } from "../types/analysis";

/**
 * Generates the prompt string with instructions and structured project data.
 */
export function generatePrompt(analysis: AnalysisResult): string {
  return `
You are a senior Software Architect and code reviewer.
Analyze the following project data gathered by Repo Inspector.

## Rules:
1. Be specific and technical. Avoid generic advice.
2. Base your analysis ONLY on the provided data.
3. If something is missing, mention it as a potential gap.
4. Prioritize real-world engineering concerns (scalability, maintainability, security).
5. Keep a professional and concise tone.

### Project Data (JSON)
\`\`\`json
${JSON.stringify(analysis.results, null, 2)}
\`\`\`

### Output Format Schema (JSON strictly)
You MUST return ONLY a JSON object that matches this structure exactly:

{
  "executiveSummary": string, // Professional summary of the project
  "architectureAnalysis": string[], // Specific evaluation of structure and modularity
  "dependencyAnalysis": string[], // Security, maintenance, and redundancy considerations
  "codeQuality": string[], // Detailed strengths and weaknesses based on types/patterns
  "recommendations": string[], // Top 5 prioritized actionable improvements
  "projectClassification": {
    "type": string, // CLI, Web App, API, etc.
    "technologies": string[] // List of detected technologies
  }
}

Do NOT include any markdown blocks (like \`\`\`json) in your response. Just pure JSON object.
`;
}