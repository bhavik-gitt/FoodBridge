import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const geminiService = {
  async generateFoodImage(prompt: string, size: "1K" | "2K" | "4K" = "1K") {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `High quality professional food photography of: ${prompt}. Clean background, appetizing, modern lighting.` }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: size
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          return `data:image/png;base64,${part.inlineData.data}`;
        }
      }
      return null;
    } catch (error) {
      console.error("Error generating image:", error);
      return null;
    }
  },

  async analyzeFoodWaste(donations: any[]) {
    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-flash-lite-preview",
        contents: `Analyze this food donation history and provide 3 key insights for waste reduction: ${JSON.stringify(donations)}`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              insights: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              prediction: { type: Type.STRING }
            }
          }
        }
      });
      return JSON.parse(response.text);
    } catch (error) {
      console.error("Error analyzing waste:", error);
      return { insights: ["Keep track of peak surplus times", "Optimize portions for weekend service", "Partner with more local NGOs"], prediction: "Expected 15% reduction in waste next month with current trends." };
    }
  },

  async animateImpactStory(imageUrl: string, prompt: string) {
    try {
      const aistudio = (window as any).aistudio;
      if (aistudio && !await aistudio.hasSelectedApiKey()) {
        await aistudio.openSelectKey();
      }

      let operation = await ai.models.generateVideos({
        model: 'veo-3.1-fast-generate-preview',
        prompt: prompt,
        image: {
          imageBytes: imageUrl.split(',')[1],
          mimeType: 'image/png',
        },
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      while (!operation.done) {
        await new Promise(resolve => setTimeout(resolve, 5000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      const response = await fetch(downloadLink!, {
        method: 'GET',
        headers: { 'x-goog-api-key': process.env.GEMINI_API_KEY || "" },
      });
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Error animating video:", error);
      return null;
    }
  }
};
