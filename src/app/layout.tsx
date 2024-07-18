import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV | Dmytro Shulyachenko",
  description: "CV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container body-container">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
