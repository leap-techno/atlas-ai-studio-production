"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ThemeToggle } from "./theme-toggle";

function ProfilePreview() {
  return (
    <div className="px-2 mb-6 flex flex-row justify-between items-center w-full">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <ThemeToggle />
    </div>
  );
}

export default ProfilePreview;
