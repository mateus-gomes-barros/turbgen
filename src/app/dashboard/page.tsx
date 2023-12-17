"use client";
import Card from "@/components/ui/card";
import { useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";

export default function Page() {
  const { styleButton, setStyleButton } = useScripts();
  return (
    <div className="flex w-full h-full gap-4  px-8 py-8">
      <div className="flex flex-1 h-[75vh] flex-col border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden">
        <header className="w-full  px-8 py-8">
          <h1 className="text-white font-medium text-2xl">TurbGen</h1>
          <input
            placeholder="O que você está buscando?"
            className="mt-2 bg-[#fff0] w-full border-b-[1px] border-[#acacac] focus:outline-none text-white"
          />
        </header>
        <div className=" h-[60%] mt-auto flex flex-row from-[#521818] from-10% bg-gradient-to-r via-[#df4d4d] via-100% to-100% to-[#bd3005]">
          <Card
            title="Script de Delay 1"
            description="Para sincronizar suas seções da sua página com o vídeo do VTurb."
            titleButton="Script de Delay"
          />
          <Card
            title="Script de Delay 1"
            description="Para sincronizar suas seções da sua página com o vídeo do VTurb."
            titleButton="Script de Delay"
          />
          <Card
            title="Script de Delay 1"
            description="Para sincronizar suas seções da sua página com o vídeo do VTurb."
            titleButton="Script de Delay"
          />
          <Card
            title="Script de Delay 1"
            description="Para sincronizar suas seções da sua página com o vídeo do VTurb."
            titleButton="Script de Delay"
          />
          <Card
            title="Script de Delay 1"
            description="Para sincronizar suas seções da sua página com o vídeo do VTurb."
            titleButton="Script de Delay"
          />
        </div>
      </div>
      <div className="flex flex-[0.6] flex-col  items-center h-[75vh] border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] rounded-2xl px-8 py-8 bg-[#faf4f4]">
        <h1 className="text-[#474747] font-medium text-2xl mr-auto">
          Estilize o botão de ação do Vturb
        </h1>
        <div className="flex w-full flex-row mt-8">
          <div className="flex flex-1">
            <div className=" flex flex-col">
              <label className="text-sm ml-1 text-[#b3b3b3] text-[10px]">
                Arredondamento de borda
              </label>
              <div className="mb-2">
                <input
                  id="borda"
                  min={0}
                  type="number"
                  onChange={(e) =>
                    setStyleButton({
                      ...styleButton,
                      borderRadius: Number(e.target.value),
                    })
                  }
                  placeholder="Ex: 10"
                  className="w-[100px] px-1 py-1 rounded-lg outline-none border-[darkRed] border-[1px] text-[12px]"
                />
                <label htmlFor="borda" className="text-sm ml-1">
                  px
                </label>
              </div>

              <label className="text-sm ml-1 text-[#b3b3b3] text-[10px]">
                Altura
              </label>
              <div className="mb-2">



                
                <input
                  type="number"
                  onChange={(e) =>
                    setStyleButton({
                      ...styleButton,
                      height: Number(e.target.value),
                    })
                  }
                  min={40}
                  placeholder="Ex: 40"
                  className="w-[100px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
                />
                <label htmlFor="borda" className="text-sm ml-1">
                  px
                </label>
              </div>
              <label
                htmlFor="borda"
                className="text-sm ml-1 text-[#b3b3b3] text-[10px]"
              >
                Largura
              </label>
              <div className="mb-2">
                <input
                  id="cor_borda"
                  type="number"
                  min={1206}
                  onChange={(e) =>
                    setStyleButton({
                      ...styleButton,
                      width: Number(e.target.value),
                    })
                  }
                  placeholder="Ex: 120"
                  className="w-[100px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
                />
                <label htmlFor="borda" className="text-sm ml-1">
                  px
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-end">
            <button
              className={`h-[3rem] text-white w-[80%] rounded-lg bg-[#1a91ff] rounded-[${
                styleButton?.borderRadius || 0
              }px]`}
              style={{...styleButton, minWidth:126, minHeight:40}}
            >
              Comprar agora
            </button>
          </div>
        </div>

        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#f53131] from-10% bg-gradient-to-r via-[#8b3131] via-100% to-100% to-[#4d1a0a]">
          Gerar e Copiar Estilo
          <Copy color="white" size={20} />
        </button>
      </div>
    </div>
  );
}
