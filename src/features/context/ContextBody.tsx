"use client";

import { useState } from "react";
import {
  ContextDemo,
  ContextReferences,
  ContextSummary,
  DemoContext,
} from "@/src/features/context";

export default function ContextBody() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoContext.Provider value={{ isOpen, setIsOpen }}>
      <main>
        <ContextSummary />
        <ContextDemo />
        <ContextReferences />
      </main>
    </DemoContext.Provider>
  );
}
