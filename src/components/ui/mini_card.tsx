type Props = {
  children: React.ReactNode;
};
export default function MiniCard({ children }: Props) {
  return (
    <div className="bg-gradient-to-t from-[#4e0606] to-[#db4848] via-[#d43737] via-100% from-10% to-100% p-4 w-full h-full flex flex-col gap-2 rounded-lg shadow-[0_20px_15px_15px_#0000002f] ">
      {children}
    </div>
  );
}
