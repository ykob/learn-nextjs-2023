"use client";

import { createContext } from "react";
import { createPortal } from "react-dom";
import { useDemoReducer } from ".";

type ContextType = {
  changeColor: (color: string) => void;
  isOpen: boolean;
  toggle: () => void;
};

export const DemoContext = createContext<ContextType>({
  changeColor: () => {},
  isOpen: false,
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
