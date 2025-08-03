"use client";

import React from "react";
import OrganizationHeader from "../../store/components/header";

function ModelsContainer() {
  return (
    <div className="container mx-auto">
      <div className="w-full min-h-screen flex flex-col gap-y-3 px-16">
        <section className="w-full overflow-y-auto">
          <OrganizationHeader
            title="Models"
            description="Explore all available models"
          />
        </section>
      </div>
    </div>
  );
}

export default ModelsContainer;
