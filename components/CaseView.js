import Link from "next/link"
import { Frame } from "@/components/Frame"

export function CaseView({ project, index, next }) {
  const number = String(index + 1).padStart(2, "0")

  return (
    <article className="case">
      <div className="wrap">
        <Link href="/#kategoriler" className="text-link case-back">
          Tüm işler
        </Link>
        <div className="case-hero">
          <Frame project={project} variant="hero" />
          <div className="case-intro">
            <p className="section-kicker">
              {number} — {project.category}
            </p>
            <h1>{project.title}</h1>
            <p className="lede">{project.summary}</p>
          </div>
        </div>

        <dl className="facts">
          <div>
            <dt>Rol</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Süre</dt>
            <dd>{project.timeline}</dd>
          </div>
          <div>
            <dt>Yıl</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>İşler</dt>
            <dd>{project.services.join(", ")}</dd>
          </div>
        </dl>

        <div className="essay">
          <section>
            <h2>Konu</h2>
            <p>{project.brief}</p>
          </section>
          <section>
            <h2>Kavram</h2>
            <p>{project.concept}</p>
          </section>
        </div>

        {project.story?.length ? (
          <section className="story">
            <h2>Bu iş</h2>
            {project.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </section>
        ) : null}

        <div className="gallery">
          {project.gallery.map((item) => (
            <figure key={item.src} className={item.wide ? "is-wide" : ""}>
              <img src={item.src} alt={item.alt} />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>

        <p className="outcome">{project.outcome}</p>

        <Link href={`/work/${next.slug}`} className="next-link">
          <span>Sıradaki iş</span>
          <strong>{next.title}</strong>
        </Link>
      </div>
    </article>
  )
}
