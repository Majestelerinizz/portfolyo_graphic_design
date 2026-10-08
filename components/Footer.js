import { site } from "@/data/site"

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer-word">KARAGÜZEL</p>
        <div className="footer-meta">
          <span>{site.designer}</span>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>2026</span>
        </div>
      </div>
    </footer>
  )
}
