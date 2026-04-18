import "./globals.css";
import { Libre_Franklin } from "next/font/google";
import Header from "../components/Header"
import Footer from "../components/Footer"

const libre = Libre_Franklin({
  subsets: ["latin"],
  variable: "--font-libre",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={libre.variable}>
      <body className="min-h-screen flex items-center justify-center bg-white">
        <div className="w-full max-w-sm min-h-screen bg-white flex flex-col">

          <Header />

          <div className="">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}