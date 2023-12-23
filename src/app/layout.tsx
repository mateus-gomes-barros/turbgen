import ScriptcontextProvider from "@/contexts/ScriptContext";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TurbGen",
  description: "Aproveite o melhor dos scripts da vturb",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gradient-to-tr from-[#521818] from-40%  via-[#df4d4d] via-100% to-100% to-[#f7cabc]"
    >
      <ScriptcontextProvider>
        <body className={poppins.className}>{children}</body>
      </ScriptcontextProvider>
    </html>
  );
}
