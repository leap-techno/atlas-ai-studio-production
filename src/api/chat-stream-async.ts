/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { client } from "@/utils/client";
import { ChatCompletionMessage } from "openai/resources/index.mjs";

export const chatStreamAsync = async (message: any): Promise<{ success: boolean; message?: ChatCompletionMessage; error?: string }> => {
    try {
        const response = await client.chat.completions.create({
            model: "grok-3",
            messages: [
                {
                    role: message.role,
                    content: message.content
                }
            ]
        })

        if (!response.choices[0].message) {
            throw new Error(String(response));
        }

        return {
            success: true,
            message: response.choices[0].message,
        };

    } catch (error) {
        console.error("createMessagesByAsync error:", error);
        return {
            success: false,
            error: error instanceof Error ? error.message : "Unknown error",
        };
    }
}