import { notFound } from "next/navigation"
import { categories, getCategory } from "@/data/categories"
import { CategoryView } from "@/components/CategoryView"

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) return { title: "Kategori" }
  return { title: category.title, description: category.summary }
}

export default async function CategoryPage({ params }) {
  const { slug } = await params
  const category = getCategory(slug)
  if (!category) notFound()
  return <CategoryView category={category} />
}
