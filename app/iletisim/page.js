import Link from "next/link"
import { site } from "@/data/site"

export const metadata = {
  title: "İletişim",
}

export default function ContactPage() {
  return (
    <main className="contact category-page">
      <div className="wrap">
        <p className="section-kicker">İletişim</p>
        <p className="contact-name">{site.designer}</p>
        <a className="contact-link" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        <a className="contact-phone" href={site.phoneHref}>
          {site.phone}
        </a>
        <p className="contact-meta">{site.location}</p>
        <Link href="/kategori/kurumsal-kimlik" className="text-link">
          Kurumsal kimliğe geç
        </Link>
      </div>
    </main>
  )
}
