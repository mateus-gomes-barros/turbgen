import { CircleUserRound } from 'lucide-react';
import Image from "next/image";


export default function Header() {
  return (
    <header className="flex flex-row items-center gap-2 w-full max-w-full bg-gradient-to-r from-[#521818] from-40%  via-[#df4d4d] via-100% to-100% to-[#f7cabc] px-8 py-4">
      <Image
        src="/images/avatar.2.png"
        alt="avatar"
        className="h-10 w-10 rounded-[50rem] border-[1px] border-gray-50"
        width={40}
        height={40}
      />
      {/* <CircleUserRound color='white' size={40}/> */}
      <div>
        <p className="text-white">TurbGen</p>
      </div>
    </header>
  );
}
