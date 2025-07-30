"use client";

import React from "react";
import usePanelStore from "@/lib/zustand/use-panel-store";
import { Copy, Download, X } from "lucide-react";
import OptionButton from "./option-button";
import ToolsPopup from "./tools-popup";

function SidePanel() {
  const { isOpen, setOpen } = usePanelStore();

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {isOpen && (
        <div
          className="h-dvh flex-shrink-0 max-w-[66%] xl:max-w-none hidden md:flex"
          style={{
            opacity: 1,
            width: "66%",
            transform: "none",
          }}
        >
          <div className="h-full w-full relative">
            <div className="absolute start-0 top-0 bottom-0 border-l z-50" />
            <div className="p-0 h-full">
              <aside className="max-h-[calc(100dvh-80px)] h-[97dvh]">
                <header className="w-full z-10 sticky flex flex-row justify-between items-center top-0 bg-background h-12 md:h-16 border-b-1 px-6">
                  <h2>This is your header</h2>
                  <div className="flex gap-x-2 items-center">
                    <span className="mr-2">
                      <ToolsPopup />
                    </span>
                    <OptionButton Icon={Copy} onEvent={() => {}} />
                    <OptionButton Icon={Download} onEvent={() => {}} />
                    <OptionButton Icon={X} onEvent={handleClose} />
                  </div>
                </header>
                <div className="flex-grow w-full h-full overflow-y-auto min-h-0 flex-1 p-6 gap-0.5">
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid ratione accusantium officia in incidunt
                    reprehenderit. Eligendi in pariatur voluptatum dicta dolorem
                    culpa est, autem mollitia expedita iure officiis labore et.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid ratione accusantium officia in incidunt
                    reprehenderit. Eligendi in pariatur voluptatum dicta dolorem
                    culpa est, autem mollitia expedita iure officiis labore et.
                  </p>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquid ratione accusantium officia in incidunt
                    reprehenderit. Eligendi in pariatur voluptatum dicta dolorem
                    culpa est, autem mollitia expedita iure officiis labore et.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidePanel;
