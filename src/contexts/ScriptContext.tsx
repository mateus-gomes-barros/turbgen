"use client"
import React, { createContext, CSSProperties, Dispatch, useContext, useState } from "react";


type styleButton = {
    borderRadius: number;
    width:number;
    height:number;
    pulse: boolean;
    velocity: string;

}

interface ScriptContextProps {
  styleButton: styleButton;
  setStyleButton: Dispatch<styleButton>;
  ActivityCustomer: string; 
  setActivityCustomer: Dispatch<string>;
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
    pulse:false,
    velocity:'1'
  } as styleButton);
  const [ActivityCustomer, setActivityCustomer] = useState('button')
  return (
    <ScriptContext.Provider value={{ styleButton, setStyleButton,ActivityCustomer,setActivityCustomer }}>
      {children}
    </ScriptContext.Provider>
  );
}
export const useScripts = () => {
    return useContext(ScriptContext);
};