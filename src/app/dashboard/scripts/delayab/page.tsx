"use client";

import MiniCard from "@/components/ui/mini_card";
import { config, configVideoProps, useScripts } from "@/contexts/ScriptContext";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import { setConfig } from "next/config";
import { useEffect, useState } from "react";
import CardAB from "../../[components]/card_ab";

export default function DelayAB() {
  const { configVideo, ClipBoardCopy, setConfigVideo } = useScripts();
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
  const embed = `
<div id="vid_653d0c1267a28d00081934df" style="position:relative;width:100%;padding: 56.25% 0 0;"><img id="thumb_653d0c1267a28d00081934df" src="https://images.converteai.net/731b1a17-a0f6-4521-b6f8-c62453dc0b90/players/653d0c1267a28d00081934df/thumbnail.jpg" style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;display:block;"><div id="backdrop_653d0c1267a28d00081934df" style="position:absolute;top:0;width:100%;height:100%;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);"></div></div><script type="text/javascript" id="scr_653d0c1267a28d00081934df">var s=document.createElement("script");s.src="https://scripts.converteai.net/731b1a17-a0f6-4521-b6f8-c62453dc0b90/players/653d0c1267a28d00081934df/player.js",s.async=!0,document.head.appendChild(s);</script>

`;
  const buildIds = () => {
    let ids = configVideo.configs
      .map((config) => {
        let parser = new DOMParser();
        let doc = parser.parseFromString(config.embed, "text/html");
        let video = doc.getElementsByTagName("div");
        if (config.embed.length > 40) {
          let id = video[0].id.replace("vid_", "");
          return { id, letter: config.id, time: config.time };
        } else {
          return {};
        }
      })
      .filter((item) => item.id != "");

    return ids;
  };

  function BuildScripts() {
   return buildIds().map((embeds) => {
      return ` if (
          smartplayer.instances[0].analytics.player.options.id ==
          "${embeds.id}"
        ) {
          const queryString =
            window.location.search.replace("utm_source=FB", "") +
            "&utm_source=vsl${embeds.letter}";
          if (buttonLinks[0].href.includes("vsl${embeds.letter}")) {
            return;
          }
          buttonLinks.forEach((buttonLink) => {
            buttonLink.href += queryString;
          });
        }
      }`;
    });
  }
  function BuildScriptsDelay() {
   return buildIds().map((embeds) => {
      return `if (
        /* COLOCAR ENTRE AS '' O ID DO SEU PLAYER A E NO VALOR 10, COLOQUE O 
                 TEMPO QUE AS SEÇÕES DEVEM APARECER DURANTE O VÍDEO A*/
        smartplayer.instances[0].analytics.player.options.id ==
        "${embeds.id}"
      ) {
        SECONDS_TO_DISPLAY = ${embeds.time || 10};
      }`;
    });
  }

  const scriptAB = ()=> { return (`
  <style>

  .esconder {
    display: none;
  }
</style>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded", function () {
    /* AQUI VOCÊ NÃO ALTERA NADA */
    var SECONDS_TO_DISPLAY = 12;
    var CLASS_TO_DISPLAY = ".${configVideo.className}";

    var attempts = 0;
    var elsHiddenList = [];
    var elsDisplayed = false;
    var elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
    var alreadyDisplayedKey = ${"`alreadyElsDisplayed${SECONDS_TO_DISPLAY}`"};
    try {
      alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
    } catch(e) {
      console.warn('Failed to read data from localStorage: ', e);
    }

    setTimeout(function () {
      elsHiddenList = Array.prototype.slice.call(elsHidden);
    }, 0);

    var showHiddenElements = function () {
      console.log(smartplayer.instances);
      elsDisplayed = true;
      elsHiddenList.forEach((e) => (e.style.display = "block"));
      try {
        localStorage.setItem(alreadyDisplayedKey, true);
      } catch (e) {
        console.warn('Failed to save data in localStorage: ', e);
      }
    };

    var startWatchVideoProgress = function () {
      if (
        typeof smartplayer === "undefined" ||
        !(smartplayer.instances && smartplayer.instances.length)
      ) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(function () {
          startWatchVideoProgress();
        }, 1000);
      }

      smartplayer.instances[0].on("play", () => {
        /* COLOCAR ENTRE AS '' O ID DO SEU PLAYER A */
        const buttonLinks = document.querySelectorAll("${configVideo.classButton}");
        console.log(buttonLinks);
        ${BuildScripts()}

/* CASO TENHA MAIS VÍDEOS PARA PASSAR O UTM COLAR NA LINHA ABAIXO*/


        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
          return;
        showHiddenElements();
      });
      smartplayer.instances[0].on("timeupdate", () => {
        const buttonLinks = document.querySelectorAll("${
          configVideo.classButton
        }");

       ${BuildScriptsDelay()}

      /* CASO TENHA MAIS VÍDEOS PARA COLOCAR DELAY COLAR NA LINHA ABAIXO*/


        if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
        if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY)
          return;
        showHiddenElements();
      });
    };

    if (alreadyElsDisplayed === "true") {
      setTimeout(function () {
        showHiddenElements();
      }, 100);
    } else {
      startWatchVideoProgress();
    }
  });
</script>
  `)};

  function MountObjectConfig(value: number) {
    if (value < configVideo.quant) {
      if (scriptActual > 0) {
        setScriptActual(scriptActual - 1);
      }
      let newConfigs = configVideo.configs.filter(
        (element, index, arr) => index !== arr.length - 1
      );
      setConfigVideo({ ...configVideo, configs: newConfigs, quant: value });
      return;
    }
    if (configVideo.configs.length > 25) {
      return;
    }
    const newVideoObj = {
      id: alfabeto[configVideo.configs.length],
      time: 10,
      embed: "",
    };
    setConfigVideo({
      ...configVideo,
      configs: [...configVideo.configs, newVideoObj],
      quant: value,
    });
  }

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
  useEffect(() => {
    console.log(configVideo);
  }, [configVideo]);

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
                defaultValue={2}
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: 2"
                onChange={(e) => MountObjectConfig(Number(e.target.value))}
                max={26}
                min={2}
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
            <MiniCard>
              <label className="text-white text-sm">
                Classe do botão de parâmetro
              </label>
              <input
                onChange={(e) =>
                  setConfigVideo({
                    ...configVideo,
                    classButton: e.target.value,
                  })
                }
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: botao_redirect"
                type="text"
              />
            </MiniCard>
          </div>
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
              Cole o código em sua página de vendas. Caso não saiba como, temos
              o tutorial abaixo:
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
          if (index == scriptActual) {
            return (
              <CardAB
                key={config.id}
                id={config.id}
                action={()=> ClipBoardCopy(scriptAB())}
                index={index}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
