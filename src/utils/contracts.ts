export type MessageRole = "user" | "assistant";
export type MessageStatus = "pending" | "receiving" | "complete" | "error";

export type Message = {
    id: string;
    message: string;
    role: MessageRole;
    status: MessageStatus;
    created_on: Date;
    updated_on: Date;
};

export enum Status {
    PENDING = "pending",
    RECEIVING = "receiving",
    COMPLETE = "complete",
    ERROR = "error",
}

export interface MessageBody {
    message: string;
    history: Message[];
    namespace: string;
    role: string;
}