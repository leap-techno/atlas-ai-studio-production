import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { MessagesStoreProps } from "../interfaces";
import { Message, MessageRole, MessageStatus } from "@/utils/contracts";

const now = new Date();

export const useMessagesStore = create<MessagesStoreProps>()(
  persist(
    (set) => ({
      messages: [],
      setMessages: (
        message: string,
        role: MessageRole,
        status: MessageStatus
      ) => {
        const newMessage: Message = {
          id: crypto.randomUUID(),
          message: message,
          role: role,
          status: status,
          created_on: now,
          updated_on: now,
        };

        // set into the store
        set((state) => ({
          messages: [...state.messages, newMessage],
        }));

        return newMessage.id;
      },
      updateMessages: (id: string, updates: Partial<Message>) => {
        set((state) => ({
          messages: state.messages.map((message) =>
            message.id === id ? { ...message, ...updates } : message
          ),
        }));
      },
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "messages-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
