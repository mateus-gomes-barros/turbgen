import { XCircle } from "lucide-react";

type Props = {
  close: () => void;
  children: React.ReactNode;
};

export default function Model({ close, children }: Props) {
  return (
    <div className="w-screen h-screen bg-[#000000b7] flex justify-center items-center fixed left-0 top-0">
      <div className="w-[60%] h-[80%] bg-[#000000] rounded-2xl relative flex items-center justify-center animate-fadeIn">
        <XCircle
          color={"#ffffff"}
          className="absolute right-[16px] top-[16px] cursor-pointer"
          size={30}
          onClick={close}
        />
        <div className="w-[95%] h-[85%] relative">
          {children}
        </div>
      </div>
    </div>
  );
}
