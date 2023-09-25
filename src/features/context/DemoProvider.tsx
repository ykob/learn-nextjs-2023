"use client";

import { createContext } from "react";
import { createPortal } from "react-dom";
import { useDemoReducer } from ".";

type ContextType = {
  isOpen: boolean;
  toggle: () => void;
};

export const DemoContext = createContext<ContextType>({
  isOpen: false,
  toggle: () => {},
});

export default function DemoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useDemoReducer();

  const toggle = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <DemoContext.Provider value={{ isOpen: state.isOpen, toggle }}>
      {children}
      {state.isOpen &&
        createPortal(
          <div>
            <i>This is a portal element.</i>
          </div>,
          document.body
        )}
    </DemoContext.Provider>
  );
}
