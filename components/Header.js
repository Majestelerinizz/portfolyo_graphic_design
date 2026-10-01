import Link from "next/link"
import { categories } from "@/data/categories"

export function Header() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="nav-brand">
          Design By KARAGUZEL
        </Link>
        <nav className="nav-links" aria-label="Ana menü">
          {categories.map((category) => (
            <Link key={category.slug} href={`/kategori/${category.slug}`}>
              {category.nav}
            </Link>
          ))}
          <Link href="/hakkinda">Hakkında</Link>
          <Link href="/iletisim">İletişim</Link>
        </nav>
      </div>
    </header>
  )
}
