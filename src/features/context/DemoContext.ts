"use client";

import { createContext } from "react";

type ContextType = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export default createContext<ContextType>({
  isOpen: false,
  setIsOpen: () => {},
});
