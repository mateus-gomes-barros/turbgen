"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  function SignUp() {
    router.push("/dashboard");
  }
  return (
    <div className="bg-gradient-to-tr w-screen h-screen flex justify-center">
      <div className="w-[40%] h-[70%]  max-2xl:w-[50%] max-2xl:h-[90%]   m-auto  rounded-[1.3rem] flex flex-col justify-between items-center px-5 py-16">
        <Image width={300} height={215} src="/images/logo.png" alt={"logo"} />
        <div className="flex flex-col items-center">
          <input
            placeholder="Seu email do VTurb"
            className="px-2 mb-4 text-white border-[#979696] border border-[1px] w-[60%] h-10 shadow-[0_5px_10px_1px_rgba(0,0,0,0.3)] focus:outline-none hover:border-[red] bg-transparent border-b rounded-2xl border-white"
          ></input>
          <p className="text-center text-[red]  w-[80%] font-bold">
            Gere seus códigos sem precisar entender nada de programação, apenas
            digite e gere!
          </p>
          <p className="text-center w-[80%] text-sm mt-4 text-white">
            Aplicação feita para gerar seus códigos (estilizações, automações e
            ações) para sua página de vendas, juntamente com o player do vturb.
            Não é necessário mexer com código ou conceitos técnicos. Divirta-se.
          </p>
        </div>
        <button
          className="bg-gradient-to-t from-[#971111] to-90% to-[#db5151] h-10 w-[250px] text-white rounded-[50rem] font-medium"
          onClick={SignUp}
        >
          LOGIN
        </button>
      </div>
    </div>
  );
}
