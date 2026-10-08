import Link from "next/link"
import { site } from "@/data/site"
import { categories, projectsIn } from "@/data/categories"
import { Portrait } from "@/components/Portrait"

const plates = [
  {
    href: "/work/velora",
    src: "/work/velora/billboard.jpg",
    alt: "Velora Coffee billboard afişi",
    title: "Velora",
    meta: "Açık hava",
    ratio: "1844 / 2765",
  },
  {
    href: "/work/tipografi",
    src: "/work/tipografi/madrid.jpg",
    alt: "Madrid Prado müze afişi",
    title: "Madrid",
    meta: "Tipografi",
    ratio: "2268 / 3175",
  },
  {
    href: "/work/kelime-avcilari",
    src: "/work/kelime/kapak.jpg",
    alt: "Kelime Avcıları kitap kapağı",
    title: "Kelime Avcıları",
    meta: "Kitap",
    ratio: "1 / 1",
  },
  {
    href: "/work/gaia",
    src: "/work/gaia/menu.jpg",
    alt: "Gaia kafe menüsü",
    title: "Gaia",
    meta: "Kimlik",
    ratio: "1754 / 1241",
  },
  {
    href: "/work/green-bird",
    src: "/work/green-bird/desen.jpg",
    alt: "Green Bird tekrarlayan desen",
    title: "Green Bird",
    meta: "Kimlik",
    ratio: "2067 / 2953",
  },
  {
    href: "/work/mino-bebe",
    src: "/work/mino-bebe/kalip-1.jpg",
    alt: "Mino Bebe kutu kalıbı",
    title: "Mino Bebe",
    meta: "Ambalaj",
    ratio: "2024 / 1432",
  },
]

export function HomeView() {
  const ticker = site.marquee.repeat(3)

  return (
    <main>
      <section className="hero">
        <div className="wrap">
          <p className="hero-kicker">Yusuf Karagüzel — Grafik tasarım</p>
          <h1>
            <span className="line-small">
              Design <em>By</em>
            </span>
            <span className="line-huge">KARAGÜZEL</span>
          </h1>
          <span className="hero-rule" aria-hidden="true" />
          <div className="hero-bottom">
            <div>
              <p className="hero-statement">{site.statement}</p>
              <a className="text-link" href="#kategoriler">
                Kategorilere bak
              </a>
            </div>
            <a className="stamp" href="#isler">
              Seçilmiş
              <br />
              iş
            </a>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <p>{ticker}</p>
          <p>{ticker}</p>
        </div>
      </div>

      <section id="isler" className="wall">
        <div className="wrap">
          <div className="section-head">
            <h2>Seçilmiş iş</h2>
            <p>Altı proje. Her biri kendi yüzeyinde sınanmış.</p>
          </div>
          <div className="wall-grid">
            {plates.map((plate) => (
              <Link
                key={plate.href}
                href={plate.href}
                className="plate-card"
              >
                <img src={plate.src} alt={plate.alt} style={{ aspectRatio: plate.ratio }} />
                <span className="plate-card-copy">
                  <strong>{plate.title}</strong>
                  <em>{plate.meta}</em>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="kategoriler" className="index">
        <div className="wrap">
          <div className="section-head">
            <h2>Kategoriler</h2>
            <p>Beş raf. Her rafta kendi işi, kendi anlatısı.</p>
          </div>
          <div className="category-grid">
            {categories.map((category) => {
              const works = projectsIn(category)
              const first = works[0]
              return (
                <Link
                  key={category.slug}
                  href={`/kategori/${category.slug}`}
                  className="category-card"
                >
                  <img src={first.images.hero} alt="" />
                  <span className="category-card-copy">
                    <em>{category.index}</em>
                    <strong>{category.title}</strong>
                    <span>{category.summary}</span>
                    <span className="category-card-works">
                      {works.map((project) => project.title).join(" · ")}
                    </span>
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="palette-band" aria-label="İşlerin renkleri">
        <div className="wrap">
          <div className="section-head">
            <h2>Renk</h2>
            <p>Bir iş, cümleden önce rengiyle kalır.</p>
          </div>
          <ul className="swatches">
            {site.swatches.map((swatch) => (
              <li key={swatch.name} style={{ background: swatch.color, color: swatch.ink }}>
                <span>{swatch.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="studio" id="studio">
        <div className="wrap studio-grid">
          <div>
            <p className="section-kicker">Stüdyo</p>
            <h2>İşareti ben çizerim.</h2>
            {site.about.map((paragraph) => (
              <p key={paragraph} className="about-copy">
                {paragraph}
              </p>
            ))}
            <Link href="/hakkinda" className="text-link">
              Hakkında
            </Link>
          </div>
          <Portrait />
        </div>
      </section>

      <section className="home-process" aria-labelledby="home-process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="home-process-title">Süreç</h2>
            <p>Bir iş nasıl sisteme döner.</p>
          </div>
          <ol className="process-grid">
            {site.process.map((step) => (
              <li key={step.num}>
                <span>{step.num}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-tools" aria-labelledby="home-tools-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="home-tools-title">Masa</h2>
            <p>Üç program, profesyonel kullanım.</p>
          </div>
          <ul className="tool-grid">
            {site.tools.map((tool) => (
              <li key={tool.name}>
                <h3>{tool.name}</h3>
                <p>{tool.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="close-band">
        <div className="wrap">
          <p className="section-kicker">İletişim</p>
          <h2>Bir yüzey konuşalım.</h2>
          <a className="contact-link" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <a className="contact-phone" href={site.phoneHref}>
            {site.phone}
          </a>
          <p className="contact-meta">{site.location}</p>
          <Link href="/iletisim" className="text-link">
            İletişim sayfası
          </Link>
        </div>
      </section>
    </main>
  )
}
