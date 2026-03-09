import { GoogleGenAI } from "@google/genai";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Download the image
    const response = await fetch("https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/1933cce36d9b3ece785197b7fa8c590e1a8189ef/ChatGPT%20Image%20Mar%209%2C%202026%2C%2008_02_55%20PM.png");
    const buffer = await response.arrayBuffer();
    const base64Data = Buffer.from(buffer).toString('base64');
    
    const result = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        {
          inlineData: {
            data: base64Data,
            mimeType: "image/png"
          }
        },
        "Describe this image in detail. Is it a full UI mockup of a hero section with text, or just an illustration? What does it look like?"
      ]
    });
    
    console.log(result.text);
  } catch (e) {
    console.error(e);
  }
}
run();
