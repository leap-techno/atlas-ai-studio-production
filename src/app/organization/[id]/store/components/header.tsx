"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import React from "react";

interface OrganizationHeaderProps {
  title: string;
  description: string;
}

function OrganizationHeader({ description, title }: OrganizationHeaderProps) {
  return (
    <header className="mt-6 text-2xl flex w-full justify-between items-center pb-6">
      <div className="flex flex-col gap-y-2">
        <h2>{title}</h2>
        <p className="text-lg text-slate-400">{description}</p>
      </div>
      <a href="#">
        <Button>
          Explore More
          <ArrowUpRight size={16} />
        </Button>
      </a>
    </header>
  );
}

export default OrganizationHeader;
