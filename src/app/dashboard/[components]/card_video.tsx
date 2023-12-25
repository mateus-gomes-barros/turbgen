import { useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";
export default function CardVideo() {
  const {setActivityCustomer, ClipBoardCopy, styleVideo, setStyleVideo } = useScripts();

  const StyleCSS = `
  <style>.smartplayer-call-action {
    text-align: center!important;
    padding: 40px 0!important;
    }@media (max-width: 448px){ .smartplayer-call-action a.smartplayer-call-action--link{ font-size: 16px!important; width: 100%!important }}@media (max-width: 337px){ .smartplayer-call-action a.smartplayer-call-action--link{ font-size: 14px!important }}</style>

  <style>
      #smartplayer{
        border-width: ${styleVideo.borderWidth}px !important;
        color: ${styleVideo.color} !important;
        ${styleVideo.shadow ? "box-shadow: 0px 0px 20px "+styleVideo.color + " !important;" : ""}
      }
  </style>
  `

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
                min={0}
                max={50}
                defaultValue={styleVideo.borderWidth}
                placeholder="Ex: 120"
                onChange={(e)=>setStyleVideo({...styleVideo, borderWidth: Number(e.target.value)})}
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
              Cor
            </label>
            <div className="mb-2">
              <input
                id="cor_borda"
                type="color"
                defaultValue={styleVideo.color}
                onChange={(e)=>setStyleVideo({...styleVideo, color:e.target.value})}
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
                checked={styleVideo.shadow}
                onChange={(e)=>setStyleVideo({...styleVideo, shadow: !styleVideo.shadow})}
                className="w-[80px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              />
            </div>
          </div>
        </div>
        <div className="h-[140px] w-[280px] border-2 border-gray flex items-center justify-center">
          <Image
            src="/images/video.jpeg"
            alt="video"
            width={280}
            height={140}
            style={{borderWidth: `${styleVideo.borderWidth}px`,borderColor: styleVideo.color, boxShadow: styleVideo.shadow? `0px 0px 20px ${styleVideo.color}`:"none"}}
          />
        </div>
      </div>

      <div className="flex justify-between w-full mt-auto">
        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#31bef5] from-10% bg-gradient-to-r via-[#317d8b] via-100% to-100% to-[#4d1a0a]"
         onClick={()=> setActivityCustomer('button')}
        >
          Estilizar Botão Vturb
        </button>
        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#f53131] from-10% bg-gradient-to-r via-[#8b3131] via-100% to-100% to-[#4d1a0a]"
          onClick={()=>ClipBoardCopy(StyleCSS)}
        >
          Gerar e Copiar Estilo
          <Copy color="white" size={20} />
        </button>
      </div>
    </div>
  );
}
