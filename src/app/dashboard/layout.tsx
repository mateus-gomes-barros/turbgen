import Header from "@/components/ui/header";
import ScriptcontextProvider from "@/contexts/ScriptContext";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ScriptcontextProvider>
      <div className="w-screen min-h-screen bg-gradient-to-tr from-[#521818] from-40%  via-[#df4d4d] via-100% to-100% to-[#f7cabc] ">
        <Header />
        {children}
      </div>
    </ScriptcontextProvider>
  );
}
