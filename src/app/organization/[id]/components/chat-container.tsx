"use client";

import React from "react";
import ContinueChat from "@/components/continue-chat";
import InputForm from "@/components/input-form";
import OpenText from "@/components/open-text";
import { useMessagesStore } from "@/lib/zustand/use-message-store";

function ChatContainer() {
  const { messages } = useMessagesStore();
  return (
    <>
      {messages.length > 1 ? (
        <ContinueChat />
      ) : (
        <div className="w-full h-full flex flex-col items-center p-2 mx-auto justify-center @sm:p-4 @sm:gap-9 @xl:w-4/5 isolate">
          <div className="flex flex-col items-center gap-6 @sm:gap-9 h-[450px] w-full @sm:pt-12 isolate">
            <OpenText />
            {/* Chat form -- startup */}
            <InputForm isStartup={true} />
          </div>
        </div>
      )}
    </>
  );
}

export default ChatContainer;
