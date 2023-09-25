"use client";

import { useContext } from "react";
import { DemoContext } from "@/src/features/context";

export default function ContextController() {
  const demo = useContext(DemoContext);

  const onClickChangeColorBlue = () => {
    demo.changeColor("#00f");
  };
  const onClickChangeColorGreen = () => {
    demo.changeColor("#0f0");
  };
  const onClickChangeColorRed = () => {
    demo.changeColor("#f00");
  };
  const onClickToggleButton = () => {
    demo.toggle();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <div>
        <button onClick={onClickToggleButton}>
          Toggle the portal element.
        </button>
      </div>
      {demo.isOpen && (
        <div style={{ display: "flex", gap: "8px" }}>
          <button onClick={onClickChangeColorRed}>
            Change the portal element color to red.
          </button>
          <button onClick={onClickChangeColorGreen}>
            Change the portal element color to green.
          </button>
          <button onClick={onClickChangeColorBlue}>
            Change the portal element color to blue.
          </button>
        </div>
      )}
    </div>
  );
}
