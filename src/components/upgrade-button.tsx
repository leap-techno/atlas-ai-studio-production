"use client";

import React from "react";
import { Button } from "./ui/button";
import { Crown } from "lucide-react";

function UpgradeButton() {
  return (
    <Button
      variant={"outline"}
      className="rounded-full flex items-center justify-center"
    >
      <Crown
        className="mr-0.5"
        size={16}
        color="#c32232"
      />
      Upgrade
    </Button>
  );
}

export default UpgradeButton;
