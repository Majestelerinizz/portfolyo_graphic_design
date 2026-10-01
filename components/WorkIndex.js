"use client"

import { useState } from "react"
import Link from "next/link"
import { Frame } from "@/components/Frame"

export function WorkIndex({ projects }) {
  const [active, setActive] = useState(0)
  const project = projects[active]

  return (
    <div className="index-layout">
      <ol>
        {projects.map((item, index) => (
          <li key={item.slug}>
            <Link
              href={`/work/${item.slug}`}
              className={index === active ? "row is-active" : "row"}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
            >
              <span className="row-num">{String(index + 1).padStart(2, "0")}</span>
              <span className="row-copy">
                <span className="row-title">{item.title}</span>
                <span className="row-line">
                  <span className="row-summary">{item.summary}</span>
                  <span className="row-meta">
                    {item.category}
                    <span aria-hidden="true"> / </span>
                    {item.year}
                  </span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
      <aside className="index-stage">
        <div className="stage-media" key={project.slug}>
          <Frame project={project} variant="hero" decorative />
        </div>
        <p className="stage-kicker">
          <span>
            {String(active + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
          <span>{project.category}</span>
        </p>
      </aside>
    </div>
  )
}
