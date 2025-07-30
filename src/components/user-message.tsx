"use client";

import React from "react";
import { Button } from "./ui/button";
import { Copy, Pencil } from "lucide-react";

interface UserMessageProps {
  message: string;
  role: string;
}

function UserMessage({ message, role }: UserMessageProps) {
  return (
    <div role={role} className="relative group flex flex-col justify-center w-full max-w-3xl md:px-4 pb-2 gap-1 items-end">
      <div
        dir="auto"
        className="min-h-7 rounded-3xl break-words text-primary max-w-prose border px-4 py-2.5 max-w-[100%] sm:max-w-[90%] bg-primary/10"
      >
        <span className="whitespace-pre-wrap">{message}</span>
      </div>
      <div className="flex flex-row flex-wrap w-full justify-end">
        <div
          className="flex items-center gap-[3px] w-max rounded-lg text-xs bg-background pb-2 px-2 end-4 -mr-2"
          style={{ bottom: "128px" }}
        >
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Copy message"
          >
            <Copy />
          </Button>
          <Button
            type="button"
            variant={"ghost"}
            className="rounded-full p-1.5"
            aria-label="Edit message"
          >
            <Pencil />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserMessage;
