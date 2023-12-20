"use client";
import React, { createContext, Dispatch, useContext, useState } from "react";

export type styleButtonProps = {
  borderRadius: number;
  width: number;
  height: number;
  pulse: boolean;
  velocity: "1" | "2" | "3";
};

export type config = {
  id: string;
  time: number;
  embed:string;
};

export type configVideoProps = {
  quant: number;
  className?: string;
  configs: config[];
};

interface ScriptContextProps {
  styleButton: styleButtonProps;
  setStyleButton: Dispatch<styleButtonProps>;
  ActivityCustomer: string;
  setActivityCustomer: Dispatch<string>;
  configVideo: configVideoProps;
  setConfigVideo: Dispatch<configVideoProps>;
}

const ScriptContext = createContext({} as ScriptContextProps);

export default function ScriptcontextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [configVideo, setConfigVideo] = useState<configVideoProps>({
    quant: 2,
    className: ".esconder",
    configs: [
      { id: "A", time: 10 },
      { id: "B", time: 10 },
    ],
  } as configVideoProps);
  const [styleButton, setStyleButton] = useState({
    borderRadius: 0,
    width: 150,
    height: 40,
    pulse: false,
    velocity: "1",
  } as styleButtonProps);
  const [ActivityCustomer, setActivityCustomer] = useState("button");
  return (
    <ScriptContext.Provider
      value={{
        styleButton,
        setStyleButton,
        ActivityCustomer,
        setActivityCustomer,
        configVideo,
        setConfigVideo,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
}
export const useScripts = () => {
  return useContext(ScriptContext);
};
