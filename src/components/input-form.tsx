/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { SendHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import RandomSuggestions from "./random-suggestions";
import LLmModels from "./llm-models";
import { useMessagesStore } from "@/lib/zustand/use-message-store";
import UploadFiles from "./upload-files";
import { Status } from "@/utils/contracts";
import { chatStreamAsync } from "@/api/chat-stream-async";

interface InputFormProps {
  isStartup: boolean;
}

function InputForm({ isStartup }: InputFormProps) {
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);
  const placeholderRef = React.useRef<HTMLDivElement>(null);
  const [input, setInput] = React.useState<string>("");

  // message store
  const { setMessages, updateMessages } = useMessagesStore();

  const handleInput = (data: any) => {
    const element = textAreaRef.current;
    if (element) {
      element.style.height = "44px";
      element.style.height = Math.min(element.scrollHeight, 305) + "px";
    }
    setInput(data.target.value);
  };

  // set assistant message to store
  const getAssistantMessage = async (message: string) => {
    setInput("");

    const id = setMessages("", "assistant", Status.PENDING);

    try {
      const response = await chatStreamAsync({
        content: message,
        role: "assistant",
      });

      if (response.success) {
        console.log(response.message);
        updateMessages(id, {
          message: response.message?.content?.toString(),
          status: Status.COMPLETE,
        });
      }
    } catch (error) {
      throw new Error(`API responded with status: ${error}`);
    }
  };

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    // set user message to store
    setMessages(input, "user", Status.COMPLETE);
    getAssistantMessage(input);
  };

  React.useEffect(() => {
    const element = placeholderRef.current;
    if (element) {
      element.style.display = input === "" ? "block" : "none";
    }
  }, [input]);

  return (
    <div
      className="absolute bottom-1 mx-auto inset-x-0 w-full max-w-[51rem] @sm:relative flex flex-col items-center 
              justify-center gap-1 @sm:gap-4 @sm:bottom-auto @sm:inset-x-auto @sm:max-w-full"
    >
      <div className="flex flex-col-reverse items-center justify-between flex-1 w-full gap-0 @sm:gap-5 @sm:flex-col relative p-2 @sm:p-0">
        <form
          className="bottom-1 relative z-10 items-center justify-center w-full mt-2 flex flex-col gap-2 text-base"
          data-id="1"
          onSubmit={handleOnSubmit}
        >
          <div className="flex flex-row gap-2 justify-center w-full relative @xl:w-4/5">
            <input type="file" multiple className="hidden" />
            <div
              className="group bg-card ring-border 
                      hover:ring-2 hover:focus-within:ring-border-2 duration-100 relative w-full 
                      overflow-hidden @container/input shadow shadow-black/5 max-w-[51rem] ring-1 ring-inset focus-within:ring-1 pb-12 px-2 @[480px]/input:px-3 rounded-3xl"
            >
              <div
                className="w-full flex-row gap-2 
                        mt-3 px-1 whitespace-nowrap hidden flex-wrap will-change-[mask-image] @sm:[mask-image:none] 
                        [mask-image:linear-gradient(to_right,transparent_0,black_0px,black_calc(100%_-_40px),transparent_100%)]"
                style={{ opacity: 1, transform: "none" }}
              ></div>
              <div className="relative z-10">
                <span
                  ref={placeholderRef}
                  className="absolute px-2 @[480px]/input:px-3 py-5 text-neutral-400 pointer-events-none select-none"
                  style={{ display: "block" }}
                >
                  What do you want to ask ?
                </span>
                <textarea
                  dir="auto"
                  aria-label="Ask me a question"
                  name="textInput"
                  id="textInput"
                  value={input}
                  ref={textAreaRef}
                  onInput={handleInput}
                  style={{
                    resize: "none",
                    height: "44px !important",
                    maxHeight: "305px",
                  }}
                  className="w-full px-2 @[480px]/input:px-3 bg-transparent focus:outline-none text-foreground align-bottom min-h-14 pt-5 my-0 mb-5 field-sizing-content"
                ></textarea>
              </div>
              <div
                className="flex gap-1.5 absolute inset-x-0 bottom-0 border-2 
                        border-transparent p-3 @[480px]/input:p-2.5 max-w-full"
              >
                {/* form footer */}
                <UploadFiles />
                <div className="flex grow gap-1.5 max-w-full">
                  <div></div>
                  <div></div>
                </div>
                <LLmModels />
                <div className="ml-auto flex flex-row items-end gap-1">
                  <Button
                    className="rounded-full h-11 w-11"
                    aria-label="Submit"
                    type="submit"
                    style={{
                      opacity: 1,
                    }}
                    disabled={input === ""}
                  >
                    <SendHorizontal />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
        {isStartup && (
          <section className="w-full flex justify-center">
            <div
              className="z-10 w-full @xl:w-4/5 
                    no-touch-scrollbar will-change-[mask-image] @sm:[mask-image:none] min-h-10 max-w-[51rem] hidden @sm:block overflow-visible"
            >
              <div className="absolute bg-background w-full max-w-[51rem]"></div>
              <RandomSuggestions />
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

export default InputForm;
