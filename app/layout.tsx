import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import MyCard from "@/components/MyCard";
import SideMenu from "@/components/SideMenu";

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${libre.className} bg-black text-white`}>
        <main className="relative min-h-screen flex items-center">
          
          {/* Container หลัก */}
          <div className="w-full max-w-[1400px] mx-auto flex items-center gap-[70px] px-10">
            
            {/* ซ้าย */}
            <div className="flex-shrink-0">
              <MyCard />
            </div>

            {/* ขวา */}
            <section className="flex-1 max-w-[700px]">
              {children}
            </section>

          </div>

          <SideMenu />
        </main>
      </body>
    </html>
  );
}