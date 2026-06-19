# AGENTS.md — Portfolio Phạm Hoàng Nhơn

> File hướng dẫn cho **mọi AI / lập trình viên** làm việc trên project này.
> Đọc kỹ trước khi sửa code hoặc thêm nội dung. Mục tiêu: giữ codebase nhất quán, không phá vỡ quy ước.
>
> **Bảo trì:** Khi có thay đổi cấu trúc / quy ước / quy trình mới → **cập nhật lại file này** cho khớp.

---

## 1. Project là gì

Portfolio cá nhân của **Phạm Hoàng Nhơn** — Graphic Designer (campaign & e-commerce, ~6 năm).
Trang web song ngữ (Tiếng Việt / English), dark mode mặc định, tông màu nhấn đỏ–hồng.

## 2. Tech stack

| Layer | Công nghệ |
|-------|-----------|
| Framework | **Next.js 15** (App Router) |
| Runtime | **React 19** + **TypeScript** |
| Styling | **Tailwind CSS v4** (tokens qua `@theme` + biến `--c-*` theo theme) |
| Icons | SVG tự load qua `<Icon name="...">` từ `public/icons/` |
| Particles | `@tsparticles/react` + `@tsparticles/slim` (chỉ dùng ở `Sparkles`) |
| Ảnh | `next/image` (tự tối ưu AVIF/WebP) |

**KHÔNG dùng** thư viện UI ngoài (MUI, Chakra, Ant, Bootstrap, shadcn) và **KHÔNG dùng** thư viện animation (framer-motion, motion, GSAP). Mọi animation viết bằng **CSS thuần** trong `globals.css`.

## 3. Chạy project

```bash
npm install
npm run dev      # → http://localhost:3200
npm run build    # production build
npm start        # chạy production (port 3200)
npx tsc --noEmit # kiểm tra TypeScript (luôn chạy sau khi sửa)
```

## 4. Cấu trúc thư mục

```
src/
├── app/                      # Next.js App Router (routes)
│   ├── globals.css           # ★ Tailwind v4 + @theme tokens + mọi @keyframes/animation
│   ├── layout.tsx            # Root: ThemeProvider + LanguageProvider + SiteHeader + SiteFooter
│   ├── page.tsx              # Trang chủ (hero, work, trust, gallery, about...)
│   ├── about/  services/  resume/  contact/   # các page tĩnh
│   └── project/[slug]/page.tsx                 # case study động
├── components/               # ★ TẤT CẢ component nằm ở đây
│   ├── Icon/                 # <Icon name="..."> — client, load SVG từ public/icons/
│   ├── LanguageProvider/  ThemeProvider/       # context vi/en + dark/light
│   ├── atoms/                # CTAButton, HeroBackground, HeroMotion, SectionHeading,
│   │                         #   ShimmerText, Sparkles, Tag
│   ├── molecules/            # ImageSlot, ProjectCard
│   └── organisms/            # Gallery, ServicesTabs, WorkCarousel, TrustSection, CaseStudy,
│                             #   SiteHeader, SiteFooter, ContactCTA, ThemeToggle, LanguageToggle
├── data/                     # Nội dung không-đổi-theo-ngôn-ngữ
│   ├── gallery.ts            # ★ Ảnh gallery "Visual Archive"
│   ├── projects.ts           # Case study (slug, hero, tags...)
│   └── site.ts               # email, phone, behance, linkedin, cvFile
├── i18n/
│   └── dictionary.ts         # ★ Mọi text song ngữ (en + vi)
public/
├── icons/                    # SVG icons (dùng qua <Icon>)
├── gallery/                  # ★ Ảnh gallery
├── services/                 # ảnh minh hoạ cho section dịch vụ (tabbed) — chờ ảnh thật
└── cv/                       # file CV PDF
```

## 5. Quy ước BẮT BUỘC

1. **Component** → luôn đặt trong `src/components/` (atoms / molecules / organisms). Cần interactivity (useState, event, browser API) → thêm `'use client'` đầu file.
2. **`data-id`** → mọi element HTML có ý nghĩa (section, card, button, list, img...) phải có `data-id="{page|component}-{block}-{element}"` (lowercase, gạch nối). Để dễ target khi chỉnh UI.
3. **KHÔNG emoji** → luôn dùng `<Icon name="...">`. Danh sách icon xem trong `public/icons/` (vd: `arrow-right`, `chevron-left`, `close`, `mail`, `download`, `image`, `sparkles`...). Thiếu icon → thêm file `.svg` vào `public/icons/`.
4. **Màu / spacing / radius** → dùng **Tailwind token class**, KHÔNG hardcode hex.
   - Text: `text-text-primary`, `text-text-secondary`, `text-text-muted`, `text-accent`
   - Nền: `bg-bg-page`, `bg-bg-surface`, `bg-bg-inset`, `bg-bg-dark`
   - Viền: `border-border-light`
   - Token định nghĩa ở `src/app/globals.css` (`@theme` map → biến `--c-*` trong `[data-theme="dark"|"light"]`). Đổi màu → sửa ở đó, không sửa rải rác.
5. **Ảnh** → bo góc thống nhất **`rounded-lg` (16px)** ở mọi nơi. Dùng `next/image` (gallery) hoặc component `ImageSlot` (case study, about).
6. **Song ngữ** → text mới phải thêm vào **cả `en` và `vi`** trong `src/i18n/dictionary.ts`. TypeScript ép buộc điều này (`vi: typeof en`), thiếu key sẽ lỗi build. Lấy text trong component qua hook `useT()`.
7. **Animation** → viết `@keyframes` + class trong `globals.css`, tôn trọng `@media (prefers-reduced-motion: reduce)`.

## 6. ★ Quy trình THÊM ẢNH vào Gallery

1. **Tối ưu ảnh** (nếu file gốc lớn): cạnh dài ~2000–2400px, WebP/JPG quality ~85. `next/image` sẽ tự resize/nén khi serve, nên không cần nén quá tay (chỉ tránh file >1MB cho gọn repo).
2. **Đặt tên file sạch**: chữ thường, gạch nối, **không dấu tiếng Việt, không khoảng trắng, không ký tự đặc biệt**.
   - ✅ `iphone17-launch-kv.webp`  ❌ `iPhone 17 (KV).webp`
3. **Bỏ file vào** `public/gallery/`.
4. **Đọc kích thước thật** của ảnh (vd bằng `sips -g pixelWidth -g pixelHeight file.webp`) để lấy `width` × `height`.
5. **Thêm item vào** `src/data/gallery.ts`:
   ```ts
   {
     id: "g10",                       // id duy nhất
     ratio: "1500/1875",              // = "width/height" PIXEL THẬT (chống layout shift)
     category: "Key Visual",          // nhãn hiện khi hover (Key Visual / Banner / Game / Social / Campaign / In ấn...)
     title: "Tên thiết kế",           // tên hiện khi hover + trong lightbox
     src: "/gallery/ten-file.webp",   // đường dẫn từ public/
   }
   ```
   - Bỏ trống `src` → component tự hiện placeholder (icon + title).
6. Chạy `npx tsc --noEmit` rồi xem `http://localhost:3200` (mục "Tuyển tập thiết kế").

Gallery là masonry (cột tự xếp theo `ratio`) + lightbox click-phóng-to (Esc đóng, ← → chuyển ảnh). Component: `src/components/organisms/Gallery/Gallery.tsx`.

## 7. Map file quan trọng

| Cần sửa | File |
|---------|------|
| Ảnh gallery | `src/data/gallery.ts` + `public/gallery/` |
| Case study (dự án) | `src/data/projects.ts` + text trong `dictionary.ts` (`projects.p1/p2/p3`) |
| Section dịch vụ (tabbed, trang chủ) | `src/components/organisms/ServicesTabs/` + text trong `dictionary.ts` (`home.services` + `services.items`). Thêm dịch vụ mới (vd Video) = thêm 1 entry vào mảng `tabs` trong component + content trong dictionary. Ảnh minh hoạ → `public/services/`, gán vào field `img` của tab |
| Email / phone / LinkedIn / Behance / CV | `src/data/site.ts` |
| Text bất kỳ (song ngữ) | `src/i18n/dictionary.ts` |
| Màu / token / animation | `src/app/globals.css` |
| Cấu trúc trang chủ | `src/app/page.tsx` |

## 8. KHÔNG được làm

- KHÔNG dùng emoji (dùng `<Icon>`)
- KHÔNG hardcode màu hex — dùng token class
- KHÔNG thêm UI library / animation library ngoài
- KHÔNG tạo component ngoài `src/components/`
- KHÔNG hardcode text trực tiếp khi cần song ngữ — đưa vào `dictionary.ts`
- KHÔNG để ảnh bo góc khác 16px (`rounded-lg`)
- KHÔNG quên `data-id` khi thêm element mới

## 9. Lưu ý vận hành

- Dev server chạy ở **port 3200** (cố định trong `package.json`).
- Theme lưu ở `localStorage['phn-theme']`, set trên `<html data-theme>`. Mặc định **dark**.
- Sau MỌI thay đổi code: chạy `npx tsc --noEmit` để chắc không lỗi type.
