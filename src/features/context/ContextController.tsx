"use client";

import { useContext } from "react";
import { DemoContext } from "@/src/features/context";

export default function ContextController() {
  const demo = useContext(DemoContext);

  const onClickButton = () => {
    demo.toggle();
  };

  return (
    <>
      <div>
        <button onClick={onClickButton}>Toggle the portal element.</button>
      </div>
    </>
  );
}
