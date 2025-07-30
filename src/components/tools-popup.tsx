"use client";

import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import Image from "next/image";

function ToolsPopup() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant={"outline"}>Connects with
          <span className="sr-only">Tools</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent side="bottom" align="end" className="w-52">
        <ul className="w-full flex flex-col gap-y-1 items-start justify-center">
          <li className="text-sm flex gap-x-2 font-medium hover:bg-slate-100 w-full p-1.5 rounded-lg cursor-pointer">
            <Image
              src="/google-docs.png"
              width={24}
              height={24}
              priority
              alt="Google docs"
            />
            Google docs
          </li>
          <li className="text-sm flex gap-x-2 font-medium hover:bg-slate-100 w-full p-1.5 rounded-lg cursor-pointer">
            <Image
              src="/moodle.svg"
              width={24}
              height={24}
              priority
              alt="Moodle LMS"
            />
            Moodle LMS
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}

export default ToolsPopup;
