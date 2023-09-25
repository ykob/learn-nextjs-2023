"use client";

import { createContext } from "react";
import { createPortal } from "react-dom";
import { useDemoReducer } from ".";

type ContextType = {
  isOpen: boolean;
  changeColor: (color: string) => void;
  toggle: () => void;
};

export const DemoContext = createContext<ContextType>({
  isOpen: false,
  changeColor: () => {},
  toggle: () => {},
});

export default function DemoProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, dispatch] = useDemoReducer();

  const changeColor = (color: string) => {
    dispatch({
      type: "changeColor",
      color,
    });
  };
  const toggle = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <DemoContext.Provider value={{ changeColor, isOpen: state.isOpen, toggle }}>
      {children}
      {state.isOpen &&
        createPortal(
          <div style={{ color: state.color }}>
            <i>This is a portal element.</i>
          </div>,
          document.body
        )}
    </DemoContext.Provider>
  );
}
