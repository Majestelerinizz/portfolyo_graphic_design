import Link from "next/link"
import { site } from "@/data/site"
import { categories, projectsIn } from "@/data/categories"

export function HomeView() {
  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">Yusuf Karagüzel — Grafik tasarım</p>
          <h1>
            <span className="line-small">
              Design <em>By</em>
            </span>
            <span className="line-huge">KARAGUZEL</span>
          </h1>
          <span className="hero-rule" aria-hidden="true" />
          <div className="hero-bottom">
            <div>
              <p className="hero-statement">{site.statement}</p>
              <a className="text-link" href="#kategoriler">
                Kategorilere bak
              </a>
            </div>
            <p className="stamp">
              Seçilmiş
              <br />
              iş
            </p>
          </div>
        </div>
      </section>

      <section id="kategoriler" className="index">
        <div className="wrap">
          <div className="section-head">
            <h2>Kategoriler</h2>
            <p>Her başlık kendi sayfasında, işlerle dolu.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const first = projectsIn(category)[0]
              return (
                <Link
                  key={category.slug}
                  href={`/kategori/${category.slug}`}
                  className="category-card"
                >
                  <img src={first.images.hero} alt="" />
                  <span className="category-card-copy">
                    <strong>{category.title}</strong>
                    <span>{category.summary}</span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
