import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import { CaseStudyView } from "@/components/organisms/CaseStudy/CaseStudyView";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!getProject(slug)) notFound();
  return <CaseStudyView slug={slug} />;
}
