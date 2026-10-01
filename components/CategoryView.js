import Link from "next/link"
import { projectsIn } from "@/data/categories"

export function CategoryView({ category }) {
  const items = projectsIn(category)

  return (
    <main className="category-page">
      <div className="wrap">
        <p className="section-kicker">Kategori {category.index}</p>
        <h1 className="category-title">{category.title}</h1>
        <p className="lede">{category.summary}</p>
        <p className="category-works">
          {items.map((project) => project.title).join(" · ")}
        </p>

        {items.map((project) => (
          <section key={project.slug} className="category-block" id={project.slug}>
            <div className="section-head">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
            </div>
            {project.story?.[0] ? <p className="category-story">{project.story[0]}</p> : null}
            <div className="gallery">
              {project.gallery.map((item) => (
                <figure key={item.src} className={item.wide ? "is-wide" : ""}>
                  <img src={item.src} alt={item.alt} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
            </div>
            <Link href={`/work/${project.slug}`} className="text-link">
              {project.title} proje sayfası
            </Link>
          </section>
        ))}
      </div>
    </main>
  )
}
