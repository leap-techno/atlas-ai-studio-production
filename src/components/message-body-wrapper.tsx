"use client";

import React from "react";
import SidebarPrimary from "@/components/sidebar";
import SidePanel from "@/components/side-panel";

interface MessageBodyWrapperProps {
  children: React.ReactNode | React.ReactNode[];
}

function MessageBodyWrapper({ children }: MessageBodyWrapperProps) {
  
  return (
    <div className="w-full min-h-svh flex">
      <SidebarPrimary />
      {children}
      <SidePanel/>
    </div>
  );
}

export default MessageBodyWrapper;
