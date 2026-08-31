import { Jockey_One } from "next/font/google";
import type { Metadata } from "next";
import Header from "@/layout/header";
import "./globals.css";

const jockeyOne = Jockey_One({

  weight: "400",
  variable: "--font-jockey-one",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Portfólio - Lucas Alves",
  description: "Apresentação de projetos criados pelo Desenvolvedor de Sistemas Lucas Alves",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (

    <html
      lang="pt-br"
      className={ `${jockeyOne.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col font-jockey h-full">

        <Header />

        { children }

      </body>

    </html>

  );

}
