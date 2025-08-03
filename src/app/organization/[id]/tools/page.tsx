"use server";

import React from "react";
import ToolsContainer from "./components/tools-container";

function ToolsPage() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <ToolsContainer />
        </main>
      </div>
    </div>
  );
}

export default ToolsPage;
