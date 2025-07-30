"use client";

import React from "react";
import { Button } from "./ui/button";
import { Paperclip } from "lucide-react";

function UploadFiles() {
  return (
    <>
      <Button className="rounded-full h-10" variant={"outline"}>
        <Paperclip />
      </Button>
    </>
  );
}

export default UploadFiles;
