import Link from "next/link"

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="wrap">
        <p className="section-kicker">404</p>
        <h1 className="line-huge">Sayfa yok</h1>
        <Link href="/" className="text-link">
          Ana sayfa
        </Link>
      </div>
    </main>
  )
}
