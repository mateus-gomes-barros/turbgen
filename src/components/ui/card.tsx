import Link from "next/link";

type Props = {
  title: string;
  description: string;
  titleButton: string;
  action?: () => void;
  url?: string;
};
export default function Card({
  title,
  description,
  titleButton,
  url,
  action,
}: Props) {
  return (
    <div className="flex flex-1 flex-col justify-between bg-gradient-to-l from-[#db4848] h-[100%] px-4 py-4">
      <h4 className="text-white text-[19px] text-center">{title}</h4>
      <p className="text-sm text-center text-white max-2xl:text-[12px]">
        {description}
      </p>
      {url && (
        <Link
          className="bg-[darkRed] text-white text-[13px] px-4 py-2 rounded-[15px] hover:brightness-125 transition text-center"
          href={url}
        >
          {titleButton}
        </Link>
      )}
      {action && (
        <button
          className="bg-[darkRed] text-white text-[13px] px-4 py-2 rounded-[15px] hover:brightness-125 transition"
          onClick={action}
        >
          {titleButton}
        </button>
      )}
    </div>
  );
}
