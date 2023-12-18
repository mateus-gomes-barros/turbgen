"use client";
import Card from "@/components/ui/card";
import { useScripts } from "@/contexts/ScriptContext";
import { scripts } from "@/helpers/scripts";
import { useEffect } from "react";
import CardButton from "./[components]/card_button";
import CardVideo from "./[components]/card_video";
export default function Page() {
  const { styleButton, setStyleButton, setActivityCustomer, ActivityCustomer } =
    useScripts();
  const velocity = {
    "1": "animate-pulse_slow",
    "2": "animate-pulse_medium",
    "3": "animate-pulse_fast",
  };
  useEffect(() => {
    console.log(styleButton);
  }, [styleButton]);

  return (
    <div className="flex w-full h-full gap-4  px-8 py-8">
      <div className="flex flex-1 h-[75vh] flex-col border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden animate-fadeIn">
        <header className="w-full  px-8 py-8">
          <h1 className="text-white font-medium text-2xl">TurbGen</h1>
          <input
            placeholder="O que você está buscando?"
            className="mt-2 bg-[#fff0] w-full border-b-[1px] border-[#acacac] focus:outline-none text-white"
          />
        </header>
        <div className=" h-[60%] mt-auto flex flex-row from-[#521818] from-10% bg-gradient-to-r via-[#df4d4d] via-100% to-100% to-[#bd3005]">
          {scripts.map((script, index) => {
            return (
              <Card
                key={index}
                title={script.title}
                description={script.description}
                titleButton={script.titleButton}
              />
            );
          })}
        </div>
      </div>

      {ActivityCustomer == "video" ? <CardVideo /> : <CardButton />}
    </div>
  );
}
