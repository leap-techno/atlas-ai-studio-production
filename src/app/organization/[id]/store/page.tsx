"use client";

import React from 'react'
import UploadContainer from './components/upload-container';

function StoragePage() {
  return (
    <div className="flex w-full h-full">
      <div className="flex w-full h-full overflow-hidden">
        <main className="w-0 h-dvh flex-grow flex-shrink relative selection:bg-accent isolate @container">
          <UploadContainer />
        </main>
      </div>
    </div>
  )
}

export default StoragePage