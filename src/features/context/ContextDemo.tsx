"use client";

import { useContext } from "react";
import { createPortal } from "react-dom";
import { DemoContext } from "@/src/features/context";

export default function ContextDemo() {
  const demo = useContext(DemoContext);

  const onClickButton = () => {
    demo.setIsOpen(!demo.isOpen);
  };

  return (
    <>
      <div>
        <button onClick={onClickButton}>Toggle the portal element.</button>
      </div>
      {demo.isOpen &&
        createPortal(
          <div>
            <i>This is a portal element.</i>
          </div>,
          document.body
        )}
    </>
  );
}
