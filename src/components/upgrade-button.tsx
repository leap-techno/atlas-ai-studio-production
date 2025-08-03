"use client";

import React from "react";
import { Button } from "./ui/button";
import { SquarePen } from "lucide-react";

function UpgradeButton() {
  return (
    <Button
      variant={"ghost"}
      className="rounded-full flex items-center justify-center"
    >
      <SquarePen
        className="mr-0.5"
        size={16}
      />
      New Chat
    </Button>
  );
}

export default UpgradeButton;
