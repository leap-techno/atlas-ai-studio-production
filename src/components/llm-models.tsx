"use client";

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";

function LLmModels() {
  return (
    <div className="flex items-center @sm:ml-2">
      <Popover modal>
        <PopoverTrigger className="flex flex-row items-center gap-1 px-3 py-1.5 rounded-full">
          <span className="text-sm flex gap-3 items-center justify-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-tool-case-icon lucide-tool-case"
            >
              <path d="M10 15h4" />
              <path d="m14.817 10.995-.971-1.45 1.034-1.232a2 2 0 0 0-2.025-3.238l-1.82.364L9.91 3.885a2 2 0 0 0-3.625.748L6.141 6.55l-1.725.426a2 2 0 0 0-.19 3.756l.657.27" />
              <path d="m18.822 10.995 2.26-5.38a1 1 0 0 0-.557-1.318L16.954 2.9a1 1 0 0 0-1.281.533l-.924 2.122" />
              <path d="M4 12.006A1 1 0 0 1 4.994 11H19a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
            </svg>
            Tools
          </span>
          <ChevronDown size={15} />
        </PopoverTrigger>
        <PopoverContent side="bottom" className="w-fit mt-1">
          <div className="max-w-fit">Your models go here</div>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default LLmModels;
