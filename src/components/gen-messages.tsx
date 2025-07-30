"use client";

import { Copy, FileText } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import usePanelStore from "@/lib/zustand/use-panel-store";

function GenMessages() {
  const { setOpen, isOpen } = usePanelStore();

  const onToggleSidePanel = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className="hidden sm:flex w-fit border min-h-[65px] rounded-lg bg-primary-foreground cursor-pointer hover:bg-accent"
        onClick={onToggleSidePanel}
      >
        <section className="pl-3 pr-5 py-3 flex gap-4 items-center">
          <FileText color="oklch(70.7% 0.022 261.325)" size={20} />
          <div className="flex flex-col gap-y-1">
            <p className="text-base font-medium">Document Name Generated </p>
            <span className="break-words text-sm whitespace-pre">
              {new Date().toISOString().split("T")[0]}
            </span>
          </div>
        </section>
      </div>
      <div className="sm:hidden w-full border min-h-[65px] rounded-lg bg-primary-foreground cursor-pointer hover:bg-accent my-4">
        <header className="w-full  bg-transparent flex justify-between items-center px-2.5 py-2 border-b-1">
          <h2 className="text-base font-medium">Title</h2>
          <div className="flex gap-2 items-center">
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
              aria-label="Copy message"
            >
              <Copy />
            </Button>
            <Button
              type="button"
              variant={"ghost"}
              className="rounded-full p-1.5"
              aria-label="Copy message"
            >
              <Copy />
            </Button>
          </div>
        </header>
        <div className="pl-3 pr-5 py-3 flex gap-4 items-center">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            repellendus id aliquid at dolores asperiores, architecto sit
            explicabo officia! Unde, neque dolorem sed assumenda vero sint
            temporibus alias at quidem!
          </p>
        </div>
      </div>
    </>
  );
}

export default GenMessages;
