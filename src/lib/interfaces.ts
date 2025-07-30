import { Message, MessageRole, MessageStatus } from "@/utils/contracts";

export interface MessagesStoreProps {
    messages: Message[];
    setMessages: (
        message: string,
        role: MessageRole,
        status: MessageStatus
    ) => string;
    updateMessages: (id: string, updates: Partial<Message>) => void;
    clearMessages: () => void;
}