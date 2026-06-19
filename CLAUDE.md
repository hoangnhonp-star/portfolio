# CLAUDE.md

Hướng dẫn đầy đủ cho project này nằm ở **[AGENTS.md](./AGENTS.md)** — đọc file đó trước khi sửa code hoặc thêm nội dung.

Tóm tắt nhanh:
- Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS v4. Dev: `npm run dev` (port 3200).
- Mọi component trong `src/components/`; cần interactivity → `'use client'`.
- Mọi element có ý nghĩa cần `data-id`. KHÔNG emoji → dùng `<Icon name="...">`.
- Màu/spacing dùng token class (định nghĩa ở `src/app/globals.css`), KHÔNG hardcode hex.
- Text song ngữ trong `src/i18n/dictionary.ts` (cả `en` + `vi`).
- Ảnh bo góc `rounded-lg` (16px); gallery dùng `next/image`.
- KHÔNG thêm UI/animation library ngoài — animation viết CSS thuần.

**Thêm ảnh gallery / sửa nội dung:** xem mục 6–7 trong `AGENTS.md`.

> Khi có thay đổi cấu trúc/quy ước mới, cập nhật `AGENTS.md` cho khớp.
