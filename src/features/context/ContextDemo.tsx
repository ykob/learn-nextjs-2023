"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function ContextDemo() {
  const [isOpenPortalElm, setIsOpenPortalElm] = useState(false);

  const onClickButton = () => {
    setIsOpenPortalElm(!isOpenPortalElm);
  };

  return (
    <>
      <div>
        <button onClick={onClickButton}>Toggle the portal element.</button>
      </div>
      {isOpenPortalElm &&
        createPortal(<div>This is a portal element,</div>, document.body)}
    </>
  );
}
