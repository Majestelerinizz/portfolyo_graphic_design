import { site } from "@/data/site"
import { Portrait } from "@/components/Portrait"

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
        <Portrait />
      </div>

      <section className="process" aria-labelledby="practice-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="practice-title">{site.practiceTitle}</h2>
            <p>Tek kişi, tek pratik.</p>
          </div>
          <div className="story">
            {site.practice.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="process" aria-label="Vizyon ve misyon">
        <div className="wrap about-panels">
          <article>
            <p className="section-kicker">Vizyon</p>
            <h2>Neyi görmek istiyorum</h2>
            <p>{site.vision}</p>
          </article>
          <article>
            <p className="section-kicker">Misyon</p>
            <h2>İşi nasıl tutuyorum</h2>
            <p>{site.mission}</p>
          </article>
        </div>
      </section>

      <section className="process" aria-labelledby="future-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="future-title">Nerede görüyorum</h2>
            <p>Stüdyo ve marka ekibi.</p>
          </div>
          <div className="story">
            <p>{site.future}</p>
          </div>
        </div>
      </section>

      <section className="process" aria-labelledby="tools-title">
        <div className="wrap">
          <div className="section-head">
            <h2 id="tools-title">Araçlar</h2>
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
