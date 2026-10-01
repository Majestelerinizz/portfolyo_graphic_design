import { Plate } from "@/components/Plate"

export function Frame({ project, variant, caption, decorative = false }) {
  const image = project.images?.[variant]
  const label = `${project.title} — ${variant}`

  const media = image ? (
    <img src={image} alt={decorative ? "" : label} />
  ) : (
    <Plate project={project} variant={variant} decorative={decorative} />
  )

  return (
    <figure className={`frame is-${variant}`}>
      <div className="frame-media" aria-hidden={decorative ? true : undefined}>
        {media}
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  )
}
