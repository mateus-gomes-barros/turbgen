import MiniCard from "@/components/ui/mini_card";
import { config } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";

interface Props{
    id:string;
    action: ()=>void;
    index:number;
}

export default function CardAB({id}:Props) {
  return (
    <section className="flex w-full h-full border flex-col p-4 rounded-3xl animate-fadeIn">
      <h2 className="text-white">EMBED DO SEU VÍDEO</h2>
      <textarea
        className="w-full max-h-[300px] h-full mt-4 bg-transparent outline-none text-white"
        placeholder="Cole seu embed aqui"
      />
      <div className="mt-4 mb-4">
        <MiniCard>
          <label className="text-white text-sm">
            Tempo de delay do vídeo {id}(Em segundos):
          </label>
          <input
            className="bg-transparent outline-none border-b border-b-gray-100 text-white"
            placeholder="Ex: 10"
            type="number"
          />
        </MiniCard>
      </div>
      <button className="bg-[#bb3131] rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center  ml-auto flex gap-1">
        <Copy size={20} />
        Gerar e Copiar Código
      </button>
    </section>
  );
}
