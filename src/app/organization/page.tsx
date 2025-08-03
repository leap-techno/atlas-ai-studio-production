import React from "react";
import {
  AddOrganization,
  OrganizationCard,
} from "./_components/organization-card";

function OrganizationPage() {
  return (
    <div className="w-full h-[100svh]">
      <div className="container mx-auto">
        <div className="w-full h-full flex flex-col gap-y-8 px-16">
          <header className="mt-6 text-2xl">
            <h2>Organization Header</h2>
            <p className="text-lg text-slate-400">
              Create or continue with your organization here
            </p>
          </header>
          <section className="w-full grid grid-cols-3 gap-3">
            <OrganizationCard />
            <AddOrganization />
          </section>
        </div>
      </div>
    </div>
  );
}

export default OrganizationPage;
