import { notFound } from "next/navigation"
import { projects, getProject } from "@/data/projects"
import { CaseView } from "@/components/CaseView"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: "Work" }
  return { title: project.title, description: project.summary }
}

export default async function WorkPage({ params }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((item) => item.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return <CaseView project={project} index={index} next={next} />
}
