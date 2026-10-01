import { site } from "@/data/site"
import { Monogram } from "@/components/Plate"

export const metadata = {
  title: "Hakkında",
}

export default function AboutPage() {
  return (
    <main className="about category-page">
      <div className="wrap about-grid">
        <div>
          <p className="section-kicker">Hakkında</p>
          <h1 className="category-title">{site.aboutTitle}</h1>
          {site.about.map((paragraph) => (
            <p key={paragraph} className="about-copy">
              {paragraph}
            </p>
          ))}
        </div>
        <Monogram />
      </div>
      <section className="process" aria-labelledby="process-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="process-title">Süreç</h2>
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
    </main>
  )
}
