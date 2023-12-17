"use client"
import React, { createContext, CSSProperties, Dispatch, useContext, useState } from "react";


type styleButton = {
    borderRadius: number;
    width:number;
    height:number;

}

interface ScriptContextProps {
  styleButton: styleButton;
  setStyleButton: Dispatch<styleButton>;
}

const ScriptContext = createContext({} as ScriptContextProps);

export default function ScriptcontextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [styleButton, setStyleButton] = useState({
    borderRadius: 0,
    width:150,
    height:40,
  } as styleButton);
  return (
    <ScriptContext.Provider value={{ styleButton, setStyleButton }}>
      {children}
    </ScriptContext.Provider>
  );
}
export const useScripts = () => {
    return useContext(ScriptContext);
};