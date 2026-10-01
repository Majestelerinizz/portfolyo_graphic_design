import { projects } from "@/data/projects"

export const categories = [
  {
    slug: "kurumsal-kimlik",
    title: "Kurumsal kimlik",
    nav: "Kimlik",
    summary: "Logo, afiş, menü, broşür ve ürünün aynı işareti taşıdığı marka sistemleri.",
    projectSlugs: ["green-bird", "gaia"],
  },
  {
    slug: "acik-hava",
    title: "Açık hava",
    nav: "Açık hava",
    summary: "Billboard, durak ve otobüs. Tek afişin üç yüzeyi.",
    projectSlugs: ["velora"],
  },
  {
    slug: "ambalaj",
    title: "Ambalaj",
    nav: "Ambalaj",
    summary: "Kutu kalıbı, ön yüz ve bilgi tasarımı.",
    projectSlugs: ["mino-bebe"],
  },
  {
    slug: "editoryal",
    title: "Kitap",
    nav: "Kitap",
    summary: "Kapak ve iç sayfa. Çocuk eline göre kurulmuş bir sözlük.",
    projectSlugs: ["kelime-avcilari"],
  },
  {
    slug: "tipografi",
    title: "Tipografi",
    nav: "Tipografi",
    summary: "Harfin kendi başına afiş olduğu işler.",
    projectSlugs: ["tipografi"],
  },
]

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug)
}

export function projectsIn(category) {
  return category.projectSlugs
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean)
}
