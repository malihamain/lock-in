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
      <body className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-sm min-h-screen bg-white flex flex-col">

          <Header />

          <div className="flex-1">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}