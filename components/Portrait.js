import { site } from "@/data/site"

export function Portrait() {
  return (
    <figure className="portrait">
      <img src={site.portrait} alt={site.portraitAlt} />
      <figcaption>
        <span>{site.designer}</span>
        <span>{site.role}</span>
      </figcaption>
    </figure>
  )
}
