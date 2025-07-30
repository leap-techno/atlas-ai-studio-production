import React from "react";

function ChatGPTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="flex h-full w-full flex-col">{children}</div>;
}

export default ChatGPTLayout;
