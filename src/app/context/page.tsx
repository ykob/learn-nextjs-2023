"use client";

import { useState } from "react";
import { createPortal } from "react-dom";

export default function ContextHome() {
  const [isOpenPortalElm, setIsOpenPortalElm] = useState(false);

  const onClickButton = () => {
    setIsOpenPortalElm(!isOpenPortalElm);
  };

  return (
    <main>
      <h2>useContext Demo</h2>
      <div>
        <button onClick={onClickButton}>Toggle the portal element.</button>
      </div>
      {isOpenPortalElm &&
        createPortal(<div>This is a portal element,</div>, document.body)}
      <h3>References</h3>
      <ul>
        <li>
          <a
            href="https://react.dev/reference/react/useContext"
            target="_blank"
          >
            useContext – React
          </a>
        </li>
      </ul>
    </main>
  );
}
