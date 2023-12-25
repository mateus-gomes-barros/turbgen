import MiniCard from "@/components/ui/mini_card";
import { config, useScripts } from "@/contexts/ScriptContext";
import { Copy } from "lucide-react";

interface Props {
  id: string;
  data: config;
  action: () => void;
  index: number;
}

export default function CardAB({ id, action, index,data}: Props) {
  const { configVideo, setConfigVideo } = useScripts();

  function ChangeEmbedScript(data: string) {
    let newConfigs = configVideo.configs.map((config) => {
      if (config.id == id) {
        return { ...config, embed: data };
      } else {
        return config;
      }
    });
    setConfigVideo({ ...configVideo, configs: newConfigs });
  }
  function ChangeTimeScript(data: string) {
    let newConfigs = configVideo.configs.map((config) => {
      if (config.id == id) {
        return { ...config, time: Number(data) };
      } else {
        return config;
      }
    });
    setConfigVideo({ ...configVideo, configs: newConfigs });
  }
  function ChangeClassButtonScript(data: string) {
    let newConfigs = configVideo.configs.map((config) => {
      if (config.id == id) {
        return { ...config, classButton: data };
      } else {
        return config;
      }
    });
    setConfigVideo({ ...configVideo, configs: newConfigs });
  }
  return (
    <section className="flex w-full h-full border flex-col p-4 rounded-3xl animate-fadeIn">
      <h2 className="text-white">EMBED DO SEU VÍDEO</h2>
      <textarea
        onChange={(e) => ChangeEmbedScript(e.target.value)}
        defaultValue={data.embed}
        className="w-full max-h-[300px] h-full mt-4 bg-transparent outline-none text-white"
        placeholder="Cole seu embed aqui"
      />
      <div className="mt-4 mb-4">
        <MiniCard>
          <label className="text-white text-sm">
            Tempo de delay do vídeo {id}(Em segundos):
          </label>
          <input
            onChange={(e) => ChangeTimeScript(e.target.value)}
            defaultValue={data.time}
            className="bg-transparent outline-none border-b border-b-gray-100 text-white"
            placeholder="Ex: 10"
            type="number"
          />
        </MiniCard>
      </div>
     
      <button
        className="bg-[#bb3131] rounded-full hover:brightness-125 transition-all text-sm p-2 text-white text-center  ml-auto flex gap-1"
        onClick={action}
      >
        <Copy size={20} />
        Gerar e Copiar Código
      </button>
    </section>
  );
}
