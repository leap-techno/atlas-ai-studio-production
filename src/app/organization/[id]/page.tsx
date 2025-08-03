/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ChatContainer from "./components/chat-container";
import Navbar from "@/components/navbar";

async function SingleOrganizationPage({ params }: any) {
  const {id} = await params;
  console.log(id);
  
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <div className="w-full relative @container/nav z-40">
            <Navbar />
          </div>
          <ChatContainer />
        </main>
      </div>
    </div>
  );
}

export default SingleOrganizationPage;
