"use client";

import { createContext, useState } from "react";
import { createPortal } from "react-dom";

type ContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const DemoContext = createContext<ContextType>({
  isOpen: false,
  setIsOpen: () => {},
});

export default function DemoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {isOpen &&
        createPortal(
          <div>
            <i>This is a portal element.</i>
          </div>,
          document.body
        )}
    </DemoContext.Provider>
  );
}
