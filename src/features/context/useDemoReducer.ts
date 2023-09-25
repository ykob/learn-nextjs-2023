"use client";

import { useReducer } from "react";

type Action =
  | {
      type: "toggle";
    }
  | {
      type: "changeColor";
      color: string;
    };
type State = {
  color: string;
  isOpen: boolean;
};

const initState = (): State => {
  return {
    color: "#00",
    isOpen: false,
  };
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "toggle":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case "changeColor":
      return {
        ...state,
        color: action.color,
      };
    default:
      throw Error("Unknown action.");
  }
};

export const useDemoReducer = () => useReducer(reducer, null, initState);
