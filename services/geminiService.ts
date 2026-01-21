
import { GoogleGenAI, Chat } from "@google/genai";

let ai: GoogleGenAI | null = null;
let chat: Chat | null = null;

const getAI = () => {
    if (!ai) {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY is not set in environment variables.");
        }
        ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    }
    return ai;
};

export const startChat = () => {
    const aiInstance = getAI();
    chat = aiInstance.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: 'You are a friendly and helpful assistant for JIFFY Software Solutions. Your goal is to answer questions about the company, its services, and technology in general. Keep your answers concise and professional.',
        },
    });
};

export const sendMessageToAI = async (message: string): Promise<string> => {
    if (!chat) {
        startChat();
    }
    
    if (chat) {
        try {
            const response = await chat.sendMessage({ message });
            return response.text;
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            return "I'm sorry, I'm having trouble connecting right now. Please try again later.";
        }
    }
    
    return "Chat is not initialized. Please start a new chat.";
};
   