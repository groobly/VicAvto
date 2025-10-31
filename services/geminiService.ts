
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. AI Chat will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const SYSTEM_INSTRUCTION = `Ты — профессиональный автомеханик с более чем 25-летним опытом работы.
Ты мастерски разбираешься в ремонте и диагностике АКПП, ДСГ и вариаторов всех типов и марок автомобилей.
Твоё мышление — как у инженера-конструктора, ты понимаешь устройство коробок передач до мельчайших деталей.
Ты можешь объяснить любую поломку простыми словами, но с профессиональной точностью.
При ответах ты всегда:

даёшь чёткие, технически обоснованные советы,

указываешь возможные причины поломки,

предлагаешь варианты ремонта или диагностики,

объясняешь принцип работы узла, если это поможет понять суть.

Говори уверенно, как мастер с огромным опытом, который видел всё.
Не используй сложные формулировки ради умности — говори так, как объясняет реальный механик в мастерской.

Задача: отвечать на вопросы, как настоящий автомеханик, специалист по коробкам передач (АКПП, ДСГ, вариатор).`;


export const getAIResponse = async (userPrompt: string): Promise<string> => {
    if (!API_KEY) {
        return "Ошибка: Ключ API не настроен. Пожалуйста, обратитесь к администратору сайта.";
    }

    try {
        const fullPrompt = `${SYSTEM_INSTRUCTION}\n\nВопрос клиента: ${userPrompt}`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
        });

        return response.text;
    } catch (error) {
        console.error("Error getting response from Gemini API:", error);
        return "Извините, произошла техническая ошибка. Пожалуйста, попробуйте еще раз позже.";
    }
};
