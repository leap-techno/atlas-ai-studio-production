/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";

interface OptionButtonProps {
  onEvent: () => void;
  Icon: any;
}

function OptionButton({ onEvent, Icon }: OptionButtonProps) {
  return (
    <span className="w-fit p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer" onClick={onEvent}>
      <Icon size={18} color="#000" />
    </span>
  );
}

export default OptionButton;
