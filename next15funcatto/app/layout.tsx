import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen absolute m-0 w-full overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-blue-800 text-white text-center h-28">
          <h1 className="text-2xl font-bold">Catto Header</h1>
        </header>
        <div className="flex flex-grow bg-red-400 text-black text-center">
          <div className="flex-[1] bg-gradient-to-r from-gray-500 to-gray-900"></div>
          <main className="h-full w-full flex-[98] bg-gray-200 dark:bg-gray-400">
            {children}
          </main>
          <div className="flex-[1] bg-gradient-to-r from-gray-900 to-gray-500"></div>
        </div>
        <footer className="bg-gray-600 text-white p-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()}{' '}Catto Next 15 Simple Site footer</p>
        </footer>
      </body>
    </html>
  );
}
