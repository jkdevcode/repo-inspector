import { GoogleGenerativeAI } from "@google/generative-ai";
import { generatePrompt } from "./prompts";
import type { AnalysisResult, AIReport } from "../types/analysis";

/**
 * Service to handle Google Gemini API interaction for generating AI technical reports.
 */
export async function generateAIReport(analysis: AnalysisResult): Promise<AIReport | null> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    console.warn("⚠️  GEMINI_API_KEY is not set. Skipping AI analysis.");
    return null;
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        generationConfig: {
            responseMimeType: "application/json",
        }
    });

    const prompt = generatePrompt(analysis);

    const result = await model.generateContent([
        {
            text: "You are a senior Software Architect and Node.js expert. Provide highly structured engineering insights. You MUST respond strictly in valid JSON format matching the schema requested by the user."
        },
        {
            text: prompt
        }
    ]);

    const response = await result.response;
    const content = response.text();
    
    if (!content) {
      console.warn("⚠️  Gemini returned empty response.");
      return null;
    }

    // Parse the strict JSON structure
    const parsedReport = JSON.parse(content) as AIReport;
    return parsedReport;

  } catch (error: any) {
    // Graceful error handling if API quota is reached, key is invalid, or network error occurs.
    console.warn("⚠️  Gemini AI generation failed:", error.message || error);
    return null;
  }
}