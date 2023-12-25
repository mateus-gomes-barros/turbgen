"use client";

import MiniCard from "@/components/ui/mini_card";
import { useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";
import { useState } from "react";
export default function Delay() {
  const [alreadyScript, setAlreadyScript] = useState(false);
  const { ClipBoardCopy, configDelay, setConfigDelay } = useScripts();
  const variable = "`alreadyElsDisplayed${SECONDS_TO_DISPLAY}`";
  const script = `
  <style>${
    configDelay.className.length > 0 ? "." + configDelay.className : ".esconder"
  } { display: none }</style>

<script type="text/javascript">
document.addEventListener("DOMContentLoaded", function() {
/* ALTERE O VALOR 10 PARA OS SEGUNDOS EM QUE AS SEÇÕES VÃO APARECER */
var SECONDS_TO_DISPLAY = ${configDelay.time};
var CLASS_TO_DISPLAY = "${
    configDelay.className.length > 0 ? "." + configDelay.className : ".esconder"
  }"
/* DAQUI PARA BAIXO NAO PRECISA ALTERAR */
var attempts = 0;
var elsHiddenList = [];
var elsDisplayed = false;
var elsHidden = document.querySelectorAll(CLASS_TO_DISPLAY);
var alreadyDisplayedKey =${variable}
var alreadyElsDisplayed = null;
try {
    alreadyElsDisplayed = localStorage.getItem(alreadyDisplayedKey);
} catch(e) {
    console.warn('Failed to read data from localStorage: ', e);
}
setTimeout(function () { elsHiddenList = Array.prototype.slice.call(elsHidden); }, 0);
var showHiddenElements = function () {
elsDisplayed = true;
elsHiddenList.forEach((e) => e.style.display = "block");
try {
  localStorage.setItem(alreadyDisplayedKey, true);
} catch (e) {
  console.warn('Failed to save data in localStorage: ', e);
}
}
var startWatchVideoProgress = function () {
if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
if (attempts >= 10) return;
attempts += 1;
return setTimeout(function () { startWatchVideoProgress() }, 1000);
}
smartplayer.instances[0].on('timeupdate', () => {
if (elsDisplayed || smartplayer.instances[0].smartAutoPlay) return;
if (smartplayer.instances[0].video.currentTime < SECONDS_TO_DISPLAY) return;
showHiddenElements();
})
}
if (alreadyElsDisplayed === 'true') {
setTimeout(function () { showHiddenElements(); }, 100);
} else {
startWatchVideoProgress()
}
});
</script>
  
  `;

  function Generate() {
    setAlreadyScript(true);
    ClipBoardCopy(script);
  }

  return (
    <div className="flex w-full h-[80vh] gap-4  px-8 py-8">
      <section className="flex-1 flex flex-col">
        <div className="flex gap-4 items-center">
          <h1 className="text-white font-medium text-2xl">Script de Delay</h1>
        </div>
        <div className="flex flex-col gap-4 mt-16">
          <div className="flex flex-1 gap-4">
            <MiniCard>
              <label className="text-white text-sm">
                tempo de delay (segundos)
              </label>
              <input
                className="bg-transparent outline-none border-b border-b-gray-100 text-white"
                placeholder="Ex: 10"
                onChange={(e) =>
                  setConfigDelay({
                    ...configDelay,
                    time: Number(e.target.value),
                  })
                }
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
                onChange={(e) =>
                  setConfigDelay({ ...configDelay, className: e.target.value })
                }
                type="text"
              />
            </MiniCard>
          </div>
          <button
            className="bg-[#bb3131] rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center mt-4 ml-auto flex gap-1"
            onClick={Generate}
          >
            <Copy size={20} />
            Gerar e Copiar Código
          </button>
          {alreadyScript && (
            <>
              <h2 className="text-white">
                INFORMAÇÕES SOBRE SEU CÓDIGO GERADO
              </h2>
              <div className="flex flex-1 gap-4">
                <MiniCard>
                  <label className="text-white text-[14px]">
                    Seu delay é de: {(configDelay.time / 60).toFixed()} min e{" "}
                    {(((configDelay.time / 60) % 1) * 60).toFixed() + " s"}
                  </label>
                  <label className="text-white text-sm">
                    O nome da sua classe é: {configDelay.className}
                  </label>
                </MiniCard>
              </div>
            </>
          )}
        </div>
      </section>
      <section className="flex flex-1 flex-col p-4 rounded-3xl h-full">
        {alreadyScript && (
          <MiniCard>
            <label className="text-white text-lg">INSTRUÇÕES:</label>
            <p className="text-white text-sm">
              Cole o código em sua página de vendas. Caso não saiba como, temos
              o tutorial abaixo:
            </p>

            <div style={{ padding: "56.25% 0 0 0",position:"relative" }}>
              <iframe
                frameBorder="0"
                allowFullScreen
                src="https://scripts.converteai.net/731b1a17-a0f6-4521-b6f8-c62453dc0b90/players/653d0c1267a28d00081934df/embed.html"
                id="ifr_653d0c1267a28d00081934df"
                style={{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"}}
                referrerPolicy="origin"
              ></iframe>
            </div>

            <a
              target="_blank"
              className="bg-[#ec4141] mt-auto rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center"
              href="https://help.vturb.com/pt-br/article/codigo-de-delay-para-sincronizar-elementos-da-pagina-com-o-video-xehbf8/"
            >
              Tutorial Script de Delay
            </a>
          </MiniCard>
        )}
      </section>
    </div>
  );
}
