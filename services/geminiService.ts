
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI assistant for Sultanmuratova Alina Abdivalievna's personal portfolio. 
About Alina:
- Full Name: Sultanmuratova Alina Abdivalievna.
- Hometown: Ai-Kol village, Leilek district, Batken region, Kyrgyzstan.
- Schooling: Attended Narkozu Batyrov secondary school (2013-2024).
- University: Current 2nd-year student at Iskhak Razzakov Kyrgyz State Technical University (KSTU/Politech).
- Department: Applied Mathematics and Informatics.
- Skills: Learning C++, Python, HTML/CSS, and algorithms.
- You must answer in the user's language (primarily Kyrgyz or Russian).
- Be professional, encouraging, and helpful. 
- If someone asks about her background, mention her origins from Batken and her dedication to mathematics and informatics at KSTU.
`;

export const getGeminiResponse = async (userMessage: string, lang: 'kg' | 'ru') => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `[User Language: ${lang}] ${userMessage}`,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    return response.text || (lang === 'kg' ? "Кечиресиз, түшүнө алган жокмун." : "Извините, я не понял вопрос.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'kg' ? "Өтүнмөдө ката кетти." : "Произошла ошибка при обработке запроса.";
  }
};
