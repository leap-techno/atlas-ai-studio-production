"use client";

import React from "react";
import UpgradeButton from "./upgrade-button";

function Navbar() {
  return (
    <nav
      className="h-16 top-0 @[80rem]/nav:h-0 @[80rem]/nav:top-8 
            absolute z-10 flex flex-row items-center justify-center 
            w-full bg-gradient-to-b from-background 
            via-background via-80% to-transparent @[80rem]/nav:from-transparent @[80rem]/nav:via-transparent"
    >
      <div className="grow max-w-[50%] @[640px]/nav:flex justify-center hidden"></div>
      <div className="absolute flex flex-row items-center md:gap-4 gap-0.5 ml-auto end-3">
        <UpgradeButton />
      </div>
    </nav>
  );
}

export default Navbar;
