import OpenAI from "openai";

export const client = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
    baseURL: "https://api.x.ai/v1",
    timeout: 360000,
});