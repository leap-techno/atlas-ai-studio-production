"use client";

import React from "react";
import OrganizationHeader from "./header";

function UploadContainer() {
  return (
    <div className="container mx-auto">
      <div className="w-full min-h-screen flex flex-col gap-y-3 px-16">
        <section className="w-full overflow-y-auto">
          <OrganizationHeader title="File Storage" description="Your uploaded files shown here"/>
        </section>
      </div>
    </div>
  );
}

export default UploadContainer;
