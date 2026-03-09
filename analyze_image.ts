import { GoogleGenAI } from "@google/genai";

async function run() {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    // Download the image
    const response = await fetch("https://raw.githubusercontent.com/malualmadut211-bot/ai-studio-media/9fb3814b026d189b147801906c63856c655b0cd6/ChatGPT%20Image%20Mar%209%2C%202026%2C%2007_40_27%20PM.png");
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
        "Describe the UI of this hero section in extreme detail. Include all text, colors, layout, buttons, typography styles, and background elements. I need to recreate this exactly in Tailwind CSS."
      ]
    });
    
    console.log(result.text);
  } catch (e) {
    console.error(e);
  }
}
run();
