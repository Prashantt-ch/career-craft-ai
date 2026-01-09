
import { GoogleGenAI, Type } from "@google/genai";
import { ResumeAnalysis } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function analyzeResume(params: { text?: string, file?: { data: string, mimeType: string } }): Promise<ResumeAnalysis> {
  if (!process.env.API_KEY) {
    throw new Error("API Key not found. Please ensure it is configured.");
  }

  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    You are a world-class career mentor and resume strategist. 
    Analyze the provided resume (either as text or a document) and provide structured feedback.
    Focus on employability, industry standards, and constructive growth.
    Align your advice with SDG 8: Decent Work and Economic Growth.
    Return a structured JSON response.
  `;

  const parts: any[] = [];

  if (params.file) {
    parts.push({
      inlineData: {
        data: params.file.data,
        mimeType: params.file.mimeType
      }
    });
    parts.push({ text: "Please analyze the attached resume document." });
  } else if (params.text) {
    parts.push({ text: `Please analyze this resume text: ${params.text}` });
  } else {
    throw new Error("No resume content provided.");
  }

  const response = await ai.models.generateContent({
    model: model,
    contents: { parts },
    config: {
      systemInstruction: systemInstruction,
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          strengths: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "List of 3-5 key strengths of the candidate."
          },
          skills: {
            type: Type.OBJECT,
            properties: {
              technical: { type: Type.ARRAY, items: { type: Type.STRING } },
              soft: { type: Type.ARRAY, items: { type: Type.STRING } }
            },
            required: ["technical", "soft"]
          },
          skillGaps: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Areas where the candidate is lacking or needs improvement."
          },
          roleSuggestions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "3-4 realistic job titles suited for this resume."
          },
          improvementTips: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "Actionable steps to make the resume stand out."
          },
          overallScore: {
            type: Type.NUMBER,
            description: "A professional readiness score from 0-100."
          }
        },
        required: ["strengths", "skills", "skillGaps", "roleSuggestions", "improvementTips", "overallScore"],
        propertyOrdering: ["overallScore", "strengths", "skills", "skillGaps", "roleSuggestions", "improvementTips"]
      }
    }
  });

  try {
    const analysis: ResumeAnalysis = JSON.parse(response.text.trim());
    return analysis;
  } catch (error) {
    console.error("Failed to parse Gemini response:", error);
    throw new Error("Failed to process the analysis results. The content might be too complex or in an unsupported format.");
  }
}
