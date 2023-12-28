"use client";
import Card from "@/components/ui/card";
import { useScripts } from "@/contexts/ScriptContext";
import { copy, scripts } from "@/helpers/scripts";
import { useEffect, useState } from "react";
import CardButton from "./[components]/card_button";
import CardVideo from "./[components]/card_video";
import Model from "./[components]/model";
import { Info } from "lucide-react";

export default function Page() {
  const [closeModal, setCloseModal] = useState(false);
  const { styleButton, ActivityCustomer, ClipBoardCopy } = useScripts();

  useEffect(() => {
    console.log(styleButton);
  }, [styleButton]);

  return (
    <div className="flex w-full h-full gap-4  px-8 py-8">
      <div className="flex flex-1 h-[75vh] flex-col border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden animate-fadeIn">
        <header className="w-full  px-8 py-8">
          <div className="flex items-center gap-4">
            <h1 className="text-white font-medium text-2xl">TurbGen</h1>
            <Info
              color={"yellow"}
              onClick={() => setCloseModal(true)}
              className="cursor-pointer"
            />
          </div>
          {/* <input
            placeholder="O que você está buscando?"
            className="mt-2 bg-[#fff0] w-full border-b-[1px] border-[#acacac] focus:outline-none text-white"
          /> */}
        </header>
        <div className=" h-[60%] mt-auto flex flex-row from-[#521818] from-10% bg-gradient-to-r via-[#df4d4d] via-100% to-100% to-[#bd3005]">
          {scripts.map((script, index) => {
            return (
              <Card
                key={index}
                url={script.url}
                title={script.title}
                description={script.description}
                titleButton={script.titleButton}
              />
            );
          })}
          {copy.map((script, index) => {
            return (
              <Card
                key={index}
                action={() => ClipBoardCopy(script.script)}
                title={script.title}
                description={script.description}
                titleButton={script.titleButton}
              />
            );
          })}
        </div>
      </div>
      {closeModal && (
        <Model close={() => setCloseModal(false)}>
          <iframe
            frameBorder="0"
            allowFullScreen
            src="https://scripts.converteai.net/731b1a17-a0f6-4521-b6f8-c62453dc0b90/players/658cf5c485a72800095a8306/embed.html"
            id="ifr_658cf5c485a72800095a8306"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
            }}
            referrerPolicy="origin"
          ></iframe>
        </Model>
      )}
      {ActivityCustomer == "video" ? <CardVideo /> : <CardButton />}
    </div>
  );
}
