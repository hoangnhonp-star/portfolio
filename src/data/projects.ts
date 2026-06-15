// Metadata 3 dự án. Text nội dung nằm ở i18n dictionary (key trùng `dictKey`).
// Data-driven: thêm dự án mới = thêm 1 phần tử + key tương ứng trong dictionary.
// Ảnh: Nhơn cung cấp bản KHÔNG chữ sau → drop vào public/projects/{slug}/ rồi điền vào `hero`/`gallery`.

import type { Dictionary } from "@/i18n/dictionary";

export type ProjectKey = keyof Dictionary["projects"]; // 'p1' | 'p2' | 'p3'

export type Project = {
  slug: string;
  dictKey: ProjectKey;
  index: string; // "01"
  /** Tag hiển thị (giữ tiếng Anh ở cả 2 ngôn ngữ — thuật ngữ ngành) */
  tags: string[];
  /** Ảnh hero không-chữ — để trống cho tới khi Nhơn cung cấp */
  hero?: string;
  /** Ảnh minh hoạ trong case study — để trống cho tới khi có ảnh không-chữ */
  gallery: string[];
};

export const projects: Project[] = [
  {
    slug: "designing-with-ai",
    dictKey: "p1",
    index: "01",
    tags: ["AI Workflow", "Campaign", "Production"],
    hero: undefined,
    gallery: [],
  },
  {
    slug: "halloween-multi-brand",
    dictKey: "p2",
    index: "02",
    tags: ["Visual System", "Multi-brand", "Campaign"],
    hero: undefined,
    gallery: [],
  },
  {
    slug: "iphone-17-launch",
    dictKey: "p3",
    index: "03",
    tags: ["Campaign", "Product Launch", "Landing Page"],
    hero: undefined,
    gallery: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProject(slug: string): Project {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
