"use client";

import { LoaderCircle } from "lucide-react";
import React from "react";

function ProcessingLoader() {
  return (
    <span className="flex gap-x-2.5 items-center">
      <LoaderCircle
        color="oklch(78.9% 0.154 211.53)"
        size={20}
        className="animate-spin delay-100"
        absoluteStrokeWidth
      />
      <span className="text-sm font-light text-pretty">Processing...</span>
    </span>
  );
}

export default ProcessingLoader;
