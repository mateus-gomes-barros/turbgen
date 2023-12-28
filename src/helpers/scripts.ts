const id = "`${prefix}-${instance.options.id}`"
  const fs = "`player-fake-fs`"
  const playerAuto = "`player-auto-height`"
  const positionLeft = "`-${position.left}px`"
  const width = "`${width >= 100 ? 100 : width}%`"
  const playerFake = "`player-fake-fs-${id}`"
  const styles = 
 `
    .player-fake-fs[data-fullscreen='true'] {
     display: flex !important;
     align-items: center !important;
     background-color: #000 !important;
     height: 100vh !important;
     width: 100vw !important;
     cursor: pointer;
    }

    .player-fake-fs[data-fullscreen='true'] .player-auto-height .smartplayer-mobile-container {
     max-width: 100% !important;
    }

    .player-fake-fs[data-fullscreen='false'] .player-auto-height {
     width: 100% !important;
    }

    .player-fake-fs[data-fullscreen='false'] {
     margin-left: 0 !important;
    }

    .player-auto-height {
     margin: 0 auto;
     width: 100%;
    }
  `
  const scriptAB = `
  <script>
  function moveCTA(container) {
   const cta = container.querySelector(".smartplay + .smartplayer-call-action");

   if (!cta) return;

   container.parentNode.insertBefore(cta, container.nextSibling);
  }

  function insertBeforePlayer(instance, prefix) {
   if(!instance) return;

   const player = instance.mobileContainer || instance.container;

   const container = document.createElement("div");

   container.id = ${id}
   container.classList.add(prefix);

   player.parentNode.insertBefore(container, player);

   container.appendChild(player);

   return container;
  }

  function mountContainers() {
   const instances = window.smartplayer.instances;

   instances.forEach(instance => {
    const container = insertBeforePlayer(instance, ${fs} )

    if(!container) return;

    moveCTA(container)

    let firstClick = instance.resume?.inResume === undefined;

    container.addEventListener("click", () => {
     console.log(instance.resume)
     if (!firstClick && container.dataset.fullscreen === "true") instance.pause();

     firstClick = false;
    });
   });

   instances.forEach(instance => insertBeforePlayer(instance, ${playerAuto}));
  }

  function mountStyles() {
   const styles = document.createElement("style");

   styles.innerHTML = ${styles}

   document.head.appendChild(styles);
  }

  function adjustXPositionFs() {
   const currentFs = document.querySelectorAll(".player-fake-fs[data-fullscreen='true']");

   currentFs.forEach(container => {
    container.style.marginLeft = "0";

    const position = container.getBoundingClientRect()

    if(position.left <= 0) return;

    container.style.marginLeft = ${positionLeft};
   });
  }

  function changeWidthByHeight() {
   const containers = document.querySelectorAll(".player-auto-height");

   containers.forEach(container => {
    const video = container.querySelector("video");

    if (!video) return;

    const aspectRatio = video.clientWidth / video.clientHeight;

    const windowHeight = window.innerHeight;
    const newWidth = windowHeight * aspectRatio;

    const width = (newWidth / window.innerWidth) * 100;

    container.style.width = ${width};
   });
  }

  function scrollToFS(container) {
   const position = container.getBoundingClientRect();

   window.scrollTo({
    top: position.top + window.scrollY,
    left: position.left + window.scrollX,
   });
  }

  function toggleFs(id, inFullscreen = false) {
   const container = document.getElementById(${playerFake});

   if (!container) return;

   container.dataset.fullscreen = inFullscreen.toString()

   if (inFullscreen) {
    window.addEventListener("resize", changeWidthByHeight);

    changeWidthByHeight();
    adjustXPositionFs();

    return scrollToFS(container);
   }

   window.removeEventListener("resize", changeWidthByHeight);
  }

  function mountFakeFsEvents() {
   const instances = window.smartplayer.instances;

   window.addEventListener("resize", adjustXPositionFs);

   instances.forEach(instance => {
    instance.on("play", () => toggleFs(instance.options.id, true));

    instance.on("pause", () => toggleFs(instance.options.id, false));
   });
  }

  function customEvents() {
   mountContainers();
   mountStyles();
   mountFakeFsEvents()
  }

  function checkPlayerLoaded() {
   if (window.smartplayer && window.smartplayer.instances) return customEvents()

   return setTimeout(checkPlayerLoaded, 100)
  }

  window.addEventListener("load", () => checkPlayerLoaded())
</script>
  
  `

  const scriptLoop = `
  <script type="text/javascript">
  window.onload = function () {
    var attempts = 0;
    var startWatchVideoProgress = function () {
      if (typeof smartplayer === 'undefined' || !(smartplayer.instances && smartplayer.instances.length)) {
        if (attempts >= 10) return;
        attempts += 1;
        return setTimeout(function () { startWatchVideoProgress() }, 1000);
      }
      smartplayer.instances[0].on('timeupdate', function () {
        if (smartplayer.instances[0].smartAutoPlay) return;
        if (!smartplayer.instances[0].video.ended) return;
          smartplayer.instances[0].video.currentTime = 0;
          setTimeout(() => {
            smartplayer.instances[0].video.play();
          }, 10)
      })
    }
    startWatchVideoProgress();
  }
</script>
  
  `
export const scripts = [
    { 
        title: 'Script de Delay',
        description: 'Para sincronizar suas seções da sua página com o vídeo do VTurb.',
        titleButton: 'Script de Delay',
        url: '/dashboard/scripts/delay',
    },
    { 
        title: 'Delay teste A/B',
        description: 'Para sincronizar suas seções da sua página com os vídeos do teste A/B do VTurb. Com 2 ou mais vídeos.',
        titleButton: 'Script de Delay para teste A/B',
        url: '/dashboard/scripts/delayab',
    },
]

export const copy = [
    { 
        title: 'Script Fullscreen',
        description: 'Para ativar o modo fullscreen dos seus videos',
        titleButton: 'Gerar e Copiar',
        script: scriptAB,
    },
    { 
        title: 'Deixar o vídeo em Looping',
        description: 'Para que, ao terminar o vídeo, ele seja reiniciado automaticamente',
        titleButton: 'Gerar e copiar',
        script: scriptLoop,
    },
]
