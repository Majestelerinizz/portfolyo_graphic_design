import "./globals.css"
import { Fraunces, Outfit } from "next/font/google"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

const display = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

const sans = Outfit({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
})

export const metadata = {
  title: {
    default: "Design By KARAGÜZEL",
    template: "%s — Design By KARAGÜZEL",
  },
  description:
    "Yusuf Karagüzel grafik tasarım portföyü. Kimlik, afiş, ambalaj ve tipografi.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${display.variable} ${sans.variable}`} data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
