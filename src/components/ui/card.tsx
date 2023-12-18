type Props = {
  title: string;
  description: string;
  titleButton: string;
};
export default function Card({ title, description, titleButton }: Props) {
  return (
    <div className="flex flex-1 flex-col justify-between bg-gradient-to-l from-[#db4848] h-[100%] px-4 py-4">
      <h4 className="text-white text-[14px] text-center">{title}</h4>
      <p className="text-sm text-center text-white max-2xl:text-[10px]">{description}</p>
      <button className="bg-[darkRed] text-white text-[10px] px-4 py-2 rounded-[8px] hover:brightness-125 transition">{titleButton}</button>
    </div>
  );
}
