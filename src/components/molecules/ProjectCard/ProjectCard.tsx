import Link from "next/link";
import { Icon } from "@/components/Icon/Icon";
import { Tag } from "@/components/atoms/Tag/Tag";
import { ImageSlot } from "@/components/molecules/ImageSlot/ImageSlot";

type ProjectCardProps = {
  href: string;
  index: string;
  title: string;
  tagline: string;
  tags: string[];
  hero?: string;
  imagePlaceholder: string;
  viewLabel: string;
  dataId: string;
};

export function ProjectCard({
  href,
  index,
  title,
  tagline,
  tags,
  hero,
  imagePlaceholder,
  viewLabel,
  dataId,
}: ProjectCardProps) {
  return (
    <Link
      data-id={dataId}
      href={href}
      className="group flex flex-col gap-4 rounded-xl border border-border-light bg-bg-page p-4 transition-colors duration-200 hover:border-ink"
    >
      <ImageSlot
        src={hero}
        alt={title}
        ratio="4/3"
        placeholderLabel={imagePlaceholder}
        rounded="md"
        dataId={`${dataId}-image`}
      />
      <div data-id={`${dataId}-body`} className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-[0.18em] text-text-muted">{index}</span>
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Tag key={tag} dataId={`${dataId}-tag-${tag.toLowerCase().replace(/\s+/g, "-")}`}>
                {tag}
              </Tag>
            ))}
          </div>
        </div>
        <h3 className="text-lg font-semibold leading-snug tracking-tight text-text-primary">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-text-secondary">{tagline}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-accent">
          {viewLabel}
          <Icon name="arrow-right" size={15} className="transition-transform duration-200 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
