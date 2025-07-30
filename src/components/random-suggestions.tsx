"use client";

import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";

function RandomSuggestions() {
  return (
    <div className="flex flex-row flex-wrap w-full gap-2 @sm:gap-2 justify-center items-center">
      <Button variant={"secondary"} className="rounded-full">
        <Star />
        Suggestion 01
      </Button>
      <Button variant={"secondary"} className="rounded-full">
        <Star />
        Suggestion 02
      </Button>
      <Button variant={"secondary"} className="rounded-full">
        <Star />
        Suggestion 03
      </Button>
      <Button variant={"secondary"} className="rounded-full">
        <Star />
        Suggestion 04
      </Button>
      <Button variant={"secondary"} className="rounded-full">
        <Star />
        Suggestion 05
      </Button>
    </div>
  );
}

export default RandomSuggestions;
