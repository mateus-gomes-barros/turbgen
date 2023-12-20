"use client";

import MiniCard from "@/components/ui/mini_card";
import { useScripts } from "@/contexts/ScriptContext";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import { useState } from "react";
import CardAB from "../../[components]/card_ab";

export default function DelayAB() {
  const [scriptActual, setScriptActual] = useState(0);
  const alfabeto = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const { configVideo } = useScripts();

  function handleBackScript(index: number) {
    if (index <= 0) {
      return;
    }
    setScriptActual(index - 1);
  }
  function handleNextScript(index: number) {
    if (index == configVideo.quant - 1) {
      return;
    }
    setScriptActual(index + 1);
  }

  return (
    <div className="flex w-full h-full gap-4  px-8 py-8">
      <section className="flex-1 flex flex-col">
        <h1 className="text-white font-medium text-2xl">
          Script de Delay Teste A/B
        </h1>
        <div className="flex flex-col gap-4 mt-16">
          <div className="grid grid-flow-col grid-rows-2 gap-4">
            <MiniCard>
              <label className="text-white text-sm">Número de vídeos:</label>
              <input
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: 2"
                max={26}
                type="number"
              />
            </MiniCard>
            <MiniCard>
              <label className="text-white text-sm">
                nome da classe (opcional)
              </label>
              <input
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: esconder"
                type="number"
              />
            </MiniCard>
          </div>
          <h2 className="text-white">INFORMAÇÕES SOBRE SEU CÓDIGO GERADO</h2>
          <div className="flex flex-1 gap-4">
            <MiniCard>
              <label className="text-white text-sm">
                Seu delay é de: X minutos
              </label>
              <label className="text-white text-sm">
                O nome da sua classe é: X
              </label>
            </MiniCard>
            <MiniCard>
              <label className="text-white text-lg">INSTRUÇÕES:</label>
              <p className="text-white text-sm">
                Cole o código em sua página de vendas. Caso não saiba como,
                temos o tutorial abaixo:
              </p>
              <a
                target="_blank"
                className="bg-[#bb3131] rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center"
                href="https://help.vturb.com/pt-br/article/codigo-de-delay-para-sincronizar-elementos-da-pagina-com-o-video-xehbf8/"
              >
                Tutorial Script de Delay
              </a>
            </MiniCard>
          </div>
        </div>
      </section>
      <div className="flex flex-1 flex-col items-center gap-4">
        <div className="flex gap-2 items-center">
          <ChevronLeftSquare
            size={24}
            className="hover:text-white cursor-pointer"
            onClick={() => handleBackScript(scriptActual)}
          />
          {configVideo.configs.map((config, index) => {
            return (
              <label
                key={config.id}
                className={`w-2 h-2  ${
                  scriptActual == index ? "bg-[#3883f3]" : "bg-[#ffffff]"
                } rounded-full cursor-pointer`}
                onClick={() => setScriptActual(index)}
              ></label>
            );
          })}
          <ChevronRightSquare
            size={24}
            className="hover:text-white cursor-pointer"
            onClick={() => handleNextScript(scriptActual)}
          />
        </div>
        {configVideo.configs.map((config, index) => {
          if(index == scriptActual){
            return (
                <CardAB
                  key={config.id}
                  id={config.id}
                  action={() => {}}
                  index={index}
                />
              )
            }
          })}
      </div>
    </div>
  );
}
