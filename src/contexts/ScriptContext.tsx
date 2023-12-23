"use client";
import React, { createContext, Dispatch, useContext, useState } from "react";

export type styleButtonProps = {
  borderRadius: number;
  width: number;
  height: number;
  pulse: boolean;
  velocity: "1" | "2" | "3";
};

export type styleVideoProps = {
  borderWidth: number;
  transparent: number;
  color: string;
  shadow: boolean;
};

export type config = {
  id: string;
  time: number;
  embed: string;
};
export type configDelayProps = {
  time: number;
  className: string;
  embed: string;
};

export type configVideoProps = {
  quant: number;
  className?: string;
  classButton: string;
  configs: config[];
};

interface ScriptContextProps {
  styleButton: styleButtonProps;
  setStyleButton: Dispatch<styleButtonProps>;
  styleVideo: styleVideoProps;
  setStyleVideo: Dispatch<styleVideoProps>;
  configDelay: configDelayProps;
  setConfigDelay: Dispatch<configDelayProps>;
  ActivityCustomer: string;
  setActivityCustomer: Dispatch<string>;
  configVideo: configVideoProps;
  setConfigVideo: Dispatch<configVideoProps>;
  ClipBoardCopy: (text: string) => Promise<void>;
}

const ScriptContext = createContext({} as ScriptContextProps);

export default function ScriptcontextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [configDelay, setConfigDelay] = useState<configDelayProps>({
    className: "esconder",
    time: 10,
    embed: "",
  } as configDelayProps);
  const [configVideo, setConfigVideo] = useState<configVideoProps>({
    quant: 2,
    className: ".esconder",
    configs: [
      { id: "A", time: 10, embed:'' },
      { id: "B", time: 10, embed: '' },
    ],
  } as configVideoProps);
  const [styleVideo, setStyleVideo] = useState<styleVideoProps>({
    borderWidth: 1,
    transparent: 0,
    color: "#000",
    shadow: false,
  });
  const [styleButton, setStyleButton] = useState({
    borderRadius: 0,
    width: 150,
    height: 40,
    pulse: false,
    velocity: "1",
  } as styleButtonProps);
  const [ActivityCustomer, setActivityCustomer] = useState("button");

  function ClipBoardCopy(text: string) {
    return navigator.clipboard
      .writeText(text)
      .then(function () {
        alert("Texto copiado para a área de transferência");
      })
      .catch(function (err) {
        console.error("Erro ao copiar para a área de transferência: ", err);
      });
  }

  return (
    <ScriptContext.Provider
      value={{
        styleButton,
        setStyleButton,
        ActivityCustomer,
        setActivityCustomer,
        configVideo,
        setConfigVideo,
        configDelay,
        setConfigDelay,
        ClipBoardCopy,
        styleVideo,
        setStyleVideo,
      }}
    >
      {children}
    </ScriptContext.Provider>
  );
}
export const useScripts = () => {
  return useContext(ScriptContext);
};
