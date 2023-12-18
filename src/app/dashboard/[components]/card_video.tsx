import { useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";
import Image from "next/image";
export default function CardVideo() {
  const {setActivityCustomer, ActivityCustomer } = useScripts();
  return (
    <div className="flex flex-[0.6] flex-col  items-center h-[75vh] border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] rounded-2xl px-8 py-8 bg-[#faf4f4] animate-fadeIn">
      <h1 className="text-[#474747] font-medium text-2xl mr-auto">
        Estilize seu Vídeo Vturb
      </h1>
      <div className="flex w-full flex-row mt-8">
        <div className="flex flex-1">
          <div className=" flex flex-col">
            <label
              htmlFor="borda"
              className="text-sm ml-1 text-[#b3b3b3] text-[10px]"
            >
              Espessura Borda
            </label>
            <div className="mb-2">
              <input
                id="cor_borda"
                type="number"
                min={206}
                placeholder="Ex: 120"
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
              Transparência
            </label>
            <div className="mb-2">
              <input
                id="cor_borda"
                type="number"
                min={206}
                placeholder="Ex: 120"
                className="w-[100px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              />
              <label htmlFor="borda" className="text-sm ml-1">
                %
              </label>
            </div>

            <label
              htmlFor="borda"
              className="text-sm ml-1 text-[#b3b3b3] text-[10px]"
            >
              Cor
            </label>
            <div className="mb-2">
              <input
                id="cor_borda"
                type="color"
                className="w-[100px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              />
            </div>


            <div className="mb-2">
              <label
                className="text-sm ml-1 text-[#b3b3b3] text-[10px]"
              >
                Sombra
              </label>
              <input
                type="checkbox"
                className="w-[80px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[140px] w-[280px] justify-end border-2 border-gray flex items-center justify-center">
          <Image
            src="/images/video.jpeg"
            alt="video"
            width={280}
            height={140}
          />
        </div>
      </div>

      <div className="flex justify-between w-full mt-auto">
        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#31bef5] from-10% bg-gradient-to-r via-[#317d8b] via-100% to-100% to-[#4d1a0a]"
         onClick={()=> setActivityCustomer('button')}
        >
          Estilizar Botão Vturb
        </button>
        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#f53131] from-10% bg-gradient-to-r via-[#8b3131] via-100% to-100% to-[#4d1a0a]">
          Gerar e Copiar Estilo
          <Copy color="white" size={20} />
        </button>
      </div>
    </div>
  );
}
