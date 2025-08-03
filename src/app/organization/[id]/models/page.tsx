"use server";

import React from "react";
import ModelsContainer from "./components/models-container";

function ModelsScreen() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <ModelsContainer />
        </main>
      </div>
    </div>
  );
}

export default ModelsScreen;
