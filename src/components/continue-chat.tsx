"use client";

import { cn } from "@/lib/utils";
import { useMessagesStore } from "@/lib/zustand/use-message-store";
import { Message } from "@/utils/contracts";
import React from "react";
import UserMessage from "./user-message";
import AssistantMessage from "./assistant-message";
import InputForm from "./input-form";

function ContinueChat() {
  const { messages } = useMessagesStore();
  return (
    <div className="relative flex flex-col items-center h-full @container/main pt-0">
      <div
        className="w-full h-full overflow-y-auto overflow-x-hidden flex flex-col items-center px-5"
        style={{
          scrollbarGutter: "stable both-edges",
          overflowAnchor: "none",
        }}
      >
        {messages.map((message: Message, index: number) => {
          const lastMessage = messages.length - 1 === index;
          return (
            <div
              key={message.id}
              className={cn(
                message.role === "assistant" ? "py-0" : "pt-20 pb-0",
                "relative w-full flex flex-col items-center"
              )}
            >
              <div></div>
              <div className="w-full max-w-[799px] flex flex-col">
                {/* User chat bubble */}
                <div>
                  {message.role === "user" && (
                    <UserMessage
                      message={message.message}
                      role={message.role}
                    />
                  )}
                </div>
                {/* GPT chat bubble */}
                <div>
                  {message.role === "assistant" && (
                    <AssistantMessage
                      message={message.message}
                      role={message.role}
                      status={message.status}
                    />
                  )}
                </div>
                {lastMessage && (
                  <div style={{ width: "100%", paddingBottom: "144px" }} />
                )}
              </div>
            </div>
          );
        })}
      </div>
      {/* Chat form */}
      <InputForm isStartup={false} />
    </div>
  );
}

export default ContinueChat;
