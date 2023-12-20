import Header from "@/components/ui/header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      {children}
    </div>
  );
}
