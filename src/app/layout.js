import { Fira_Sans, Nunito, Protest_Guerrilla } from "next/font/google"
import "./globals.css";
import Header from "@/Components/UI/Header";
import Footer from "@/Components/UI/Footer";

export const webSiteHeadingFont = Protest_Guerrilla({
  subsets: ["latin"],
  weight: ["400"]
})

export const subHeadingFont = Fira_Sans({
  subsets: ["latin"],
  weight: ["600"]
})


export const contentFont = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400"]
})


export const metadata = {
  title: "GH HELPER",
  description: "a fullstack next.js blog project ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`  ${contentFont.className} antialiased`}
      >
        <Header font={webSiteHeadingFont} />
        {children}
        <Footer font={webSiteHeadingFont} />
      </body>
    </html>
  );
}
