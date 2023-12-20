"use client"


import MiniCard from "@/components/ui/mini_card";
import {Copy} from 'lucide-react'
export default function Delay() {
  return (
    <div className="flex w-full h-full gap-4  px-8 py-8">
      <section className="flex-1 flex flex-col">
        <h1 className="text-white font-medium text-2xl">Script de Delay</h1>
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex flex-1 gap-4">
            <MiniCard>
              <label className="text-white text-sm">
                tempo de delay (segundos)
              </label>
              <input
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: 10"
                type="number"
              />
            </MiniCard>
            <MiniCard>
              <label className="text-white text-sm">
                nome da classe (opcional)
              </label>
              <input
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: 10"
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
      <section className="flex flex-1 border flex-col p-4 rounded-3xl">
        <h2 className="text-white">EMBED DO SEU VÍDEO</h2>
        <textarea
          className="w-full max-h-[300px] h-full mt-4 bg-transparent outline-none text-white"
          placeholder="Cole seu embed aqui"
          
        />
        <button className="bg-[#bb3131] rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center mt-4 ml-auto flex gap-1">
            <Copy size={20}/>
          Gerar e Copiar Código
        </button>
      </section>
    </div>
  );
}
