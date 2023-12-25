import { styleButtonProps, useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";
export default function CardButton() {
  const velocity = {
    "3": "animate-pulse_slow",
    "2": "animate-pulse_medium",
    "1": "animate-pulse_fast",
  };
  const { styleButton, setStyleButton, setActivityCustomer, ClipBoardCopy } = useScripts();

  const StyleCSS = `

  <style>.smartplayer-call-action {
    text-align: center!important;
    padding: 40px 0!important;
    }@media (max-width: 448px){ .smartplayer-call-action a.smartplayer-call-action--link{ font-size: 16px!important; width: 100%!important }}@media (max-width: 337px){ .smartplayer-call-action a.smartplayer-call-action--link{ font-size: 14px!important }}</style>

  <style>
    @keyframes pulse_gen{
      0% { 
          transform: scale(1); 
        }
      
        50%{ 
          transform: scale(1.2) 
        };

        100%{ 
          transform: scale(1) 
        };

      }
      .smartplayer-call-action--link{
        border-radius: ${styleButton.borderRadius}px !important;
        height: ${styleButton.height}px !important;
        width: ${styleButton.width}px !important;
        padding: 0 !important;
        display:flex !important;
        margin:auto !important; 
        align-items:center !important;
        justify-content:center !important;
        ${styleButton.pulse ?  "animation: pulse_gen " + Number(styleButton.velocity)/2+"s ease-in-out infinite !important;": ''}
      }
    
  </style>
  `

  
  return (
    <div className="flex flex-[0.6] flex-col  items-center min-h-[75vh] border-black shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] rounded-2xl px-8 py-8 bg-[#faf4f4] animate-fadeIn">
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
                defaultValue={styleButton.height}
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
                defaultValue={styleButton.width}
                min={200}
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
            <div className="mb-2">
              <label
                htmlFor="borda"
                className="text-sm ml-1 text-[#b3b3b3] text-[10px]"
              >
                Pulsar
              </label>
              <input
                checked={styleButton.pulse}
                type="checkbox"
                onChange={() =>
                  setStyleButton({
                    ...styleButton,
                    pulse: !styleButton.pulse,
                  })
                }
                className="w-[80px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              />
            </div>
            <div className="mb-2">
              <label className="text-sm ml-1 text-[#b3b3b3] text-[10px]">
                Velocidade da animação
              </label>
              <select
                defaultValue={styleButton.velocity}
                onChange={(e) =>
                  setStyleButton({ ...styleButton, velocity: e.target.value as styleButtonProps["velocity"]})
                }
                className="w-[80px] outline-none px-1 py-1 rounded-lg border-[darkRed] border-[1px] text-[12px]"
              >
                <option value={3}>Lento</option>
                <option value={2}>Médio</option>
                <option value={1}>Rápido</option>
              </select>
            </div>
          </div>
        </div>
        <div className="
        flex flex-1 justify-center items-center mb-16">
          <button
            className={`h-[3rem] text-white w-[80%] rounded-lg bg-[#1a91ff] rounded-[${
              styleButton?.borderRadius || 0
            }px] ${styleButton.pulse && velocity[styleButton.velocity]}`}
            style={{
              width: styleButton.width,
              height: styleButton.height,
              borderRadius: styleButton.borderRadius,
              minWidth: 200,
              minHeight: 40,
              fontSize:23,
              fontWeight:'600',
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.4)",
              
            }}
          >
            Comprar agora
          </button>
        </div>
      </div>
      <div className="flex justify-between w-full mt-auto">
        <button className="flex gap-2 rounded-lg p-2  mt-auto  text-white  from-[#31bef5] from-10% bg-gradient-to-r via-[#317d8b] via-100% to-100% to-[#4d1a0a]"
            onClick={()=> setActivityCustomer('video')}
        >
          Estilizar Video Vturb
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
