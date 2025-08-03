/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building2 } from "lucide-react";
import CreateOrganization from "./create-organization";

export function OrganizationCard() {
  return (
    <a href="/organization/4285d631-bea2-4b52-a798-527591f78fd3">
      <Card className="hover:border-slate-400 border-slate-300 dark:bg-transparent">
        <CardContent>
          <CardHeader className="w-full flex flex-row justify-between items-center md:flex-wrap lg:flex-nowrap p-0">
            <div className="w-full flex flex-col gap-y-2">
              <Building2
                size={30}
                className="dark:text-slate-200"
                absoluteStrokeWidth
              />
              <CardTitle className="text-primary">Organization Name</CardTitle>
            </div>
            <Badge>2+ Users</Badge>
          </CardHeader>
          <div className="text-primary text-xs py-6 flex w-full gap-x-2 h-5">
            <p>Created by: Harshana Wijesinghe</p>
            <Separator orientation="vertical" />
            <p>Created on:</p>
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export function AddOrganization() {
  return (
    <>
      <Card className="border-dashed dark:bg-transparent border-2 text-primary bg-slate-200 dark:border-slate-400/60 hover:bg-slate-100/10">
        <CardContent>
          <CreateOrganization />
        </CardContent>
      </Card>
    </>
  );
}
