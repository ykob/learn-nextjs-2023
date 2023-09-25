"use client";

import { useReducer } from "react";

type Action = {
  type: "toggle";
};
type State = {
  isOpen: boolean;
};

const DemoReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      throw Error("Unknown action.");
  }
};
const DemoReducerState: State = {
  isOpen: false,
};

export const useDemoReducer = () => useReducer(DemoReducer, DemoReducerState);
