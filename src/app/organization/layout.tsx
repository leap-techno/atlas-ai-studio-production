import React from "react";

interface OrganizationLayoutProps {
  children: Readonly<React.ReactNode>;
}

function OrganizationLayout({ children }: OrganizationLayoutProps) {
  return (
    <div className="w-full h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col w-full h-full">{children}</div>
      </div>
    </div>
  );
}

export default OrganizationLayout;
