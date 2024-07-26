import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-56">
            <div></div>
            <div className="flex-grow p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 md:overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
