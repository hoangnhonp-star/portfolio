# Portfolio Hybrid — Information Architecture & Wireframe (text)

> **Hướng đã chọn:** Option C — Hybrid (xem [portfolio-directions.md](portfolio-directions.md)).
> **Định vị:** "Graphic Designer cho Growth & Commerce" — 1 lõi chung + 2 lớp định tuyến (recruiter / client), mặc định nghiêng nhẹ về recruiter.
> **Chủ thể:** Phạm Hoàng Nhơn — ~6 năm: Campaign, E-commerce, Landing Page, Visual Systems, Multi-brand, AI-assisted Workflow.
> **Ngày:** 2026-06-15 · **Trạng thái:** Tài liệu cấu trúc. **Chưa code.**

---

## Mục lục

1. [Sitemap tổng thể](#1-sitemap-tổng-thể)
2. [Global elements (Header / Footer)](#2-global-elements)
3. [Wireframe text từng trang](#3-wireframe-text-từng-trang)
   - 3.1 [Home](#31-home)
   - 3.2 [Work (listing)](#32-work-listing)
   - 3.3 [Project Detail (case study)](#33-project-detail-case-study)
   - 3.4 [About](#34-about)
   - 3.5 [Services](#35-services)
   - 3.6 [Resume](#36-resume)
   - 3.7 [Contact](#37-contact)
4. [Cơ chế định tuyến kép (dual-path)](#4-cơ-chế-định-tuyến-kép)
5. [Content checklist Nhơn cần chuẩn bị](#5-content-checklist-nhơn-cần-chuẩn-bị)
6. [Nguyên tắc thiết kế khi triển khai](#6-nguyên-tắc-thiết-kế-khi-triển-khai)

---

## 1. Sitemap tổng thể

```
/                     Home
/work                 Work — listing 6–8 dự án + filter theo loại
/work/[slug]          Project Detail — case study (template 7 phần)
/about                About — định vị + 2 đoạn (teams / clients) + AI workflow
/services             Services — cho client (ngắn gọn)
/resume               Resume — cho recruiter (+ nút Download PDF)
/contact              Contact — 2 path: for teams | for projects
```

**Độ ưu tiên điều hướng:** Work là trung tâm. Mọi trang đều có lối về Home (logo) + CTA Contact luôn trong tầm với.

---

## 2. Global elements

### 2.1 Header (sticky, gọn)
```
┌──────────────────────────────────────────────────────────┐
│  [PHN / Phạm Hoàng Nhơn]      Work  About  Services  Contact   [Download CV] │
└──────────────────────────────────────────────────────────┘
```
- Logo/tên trái → Home.
- 4 mục nav, **Work đầu tiên**.
- Nút phụ **Download CV** (phục vụ recruiter — luôn hiện).
- Mobile: hamburger → menu dọc; CV thành item trong menu.

### 2.2 Footer (mọi trang)
```
┌──────────────────────────────────────────────────────────┐
│  Phạm Hoàng Nhơn — Graphic Designer, Growth & Commerce     │
│  Email (click) · LinkedIn · Behance/Instagram              │
│  Trạng thái: Open to full-time & freelance                 │
│  © 2026                                                    │
└──────────────────────────────────────────────────────────┘
```
- Footer chứa **cả 2 tín hiệu**: liên hệ + trạng thái sẵn sàng cho cả job lẫn freelance.

---

## 3. Wireframe text từng trang

> Quy ước: mỗi block ghi kèm **mục đích** và (T)=phục vụ recruiter/teams, (C)=phục vụ client, (T+C)=cả hai.

### 3.1 Home

```
┌─ HERO ─────────────────────────────────────────────── (T+C)
│  H1: Phạm Hoàng Nhơn — Graphic Designer cho Growth & Commerce
│  Sub: Biến brief marketing & thương mại thành hệ thống thiết kế
│       bán được — campaign, e-commerce, landing page, đa brand.
│  [Xem dự án ▸]   [Liên hệ]
│  (tùy chọn) 1 ảnh/keyvisual đại diện, tĩnh, nhẹ
├─ SELECTED WORK ──────────────────────────────────────── (T+C)
│  Tiêu đề: Selected Work
│  Grid 4–6 card:
│   ┌─────────┐ ┌─────────┐ ┌─────────┐
│   │ thumb   │ │ thumb   │ │ thumb   │
│   │ Tên     │ │ Tên     │ │ Tên     │
│   │ [tag]   │ │ [tag]   │ │ [tag]   │  tag = Campaign/E-com/Landing/System
│   │ 1 dòng  │ │ 1 dòng  │ │ 1 dòng  │  outcome ngắn
│   └─────────┘ └─────────┘ └─────────┘
│  [Xem tất cả dự án ▸] → /work
├─ TRUST STRIP ─────────────────────────────────────────── (C, hỗ trợ T)
│  "Đã làm việc cùng:" + dải logo brand (grayscale)
├─ ABOUT TEASER ────────────────────────────────────────── (T+C)
│  Ảnh nhỏ + 2–3 câu định vị + [Về tôi ▸] → /about
├─ CONTACT CTA ─────────────────────────────────────────── (T+C)
│  "Đang tìm designer cho team — hoặc cho một dự án?"
│  [Cho team / tuyển dụng] → /contact#teams
│  [Cho dự án / client]     → /contact#projects
└────────────────────────────────────────────────────────
```
**Mục đích trang:** trong vài giây trả lời "ai + giỏi gì + work tốt nhất", rồi định tuyến. Không loader, không animation cản trở.

### 3.2 Work (listing)

```
┌─ PAGE HEADER ────────────────────────────────────────── (T+C)
│  H1: Work
│  Sub: 1 dòng — "Dự án chọn lọc về campaign, e-commerce & visual systems."
├─ FILTER (nếu ≥6 dự án nhiều mảng) ────────────────────── (T+C)
│  [Tất cả] [Campaign] [E-commerce] [Landing Page] [Visual System]
├─ PROJECT GRID ────────────────────────────────────────── (T+C)
│  6–8 card (cùng cấu trúc Home, đầy đủ hơn):
│   thumb · Tên · tag · 1 dòng vai trò/kết quả · year
│  → click vào card mở /work/[slug]
└────────────────────────────────────────────────────────
```
**Quy tắc nội dung:** tối đa 6–8 dự án, chỉ giữ cái mạnh nhất. Không trộn artwork lẻ.

### 3.3 Project Detail (case study)

> Trang quan trọng nhất. Template 7 phần, dùng chung cho mọi dự án. Có **đủ tín hiệu cho cả recruiter (My Role) và client (Result)**.

```
┌─ 1. SNAPSHOT / HERO ──────────────────────────────────── (T+C)
│  Tên dự án · Brand/Client · Năm
│  Meta hàng ngang: Vai trò | Loại việc | Thời lượng | (Team nếu có)
│  Ảnh đỉnh nhất của dự án
├─ 2. CONTEXT / PROBLEM ────────────────────────────────── (T+C)
│  Bài toán kinh doanh? Khách hàng mục tiêu? Ràng buộc?
├─ 3. MY ROLE ──────────────────────────────────────────── (T) ★
│  Chính xác Nhơn làm phần nào; ai làm phần còn lại.
│  (Đoạn này recruiter đọc kỹ nhất — bắt buộc, không bỏ.)
├─ 4. APPROACH & DECISIONS ─────────────────────────────── (T+C)
│  Hướng tiếp cận · các phương án cân nhắc · LÝ DO chọn.
│  Có thể kèm sketch / draft / iteration để lộ tư duy.
├─ 5. SOLUTION ─────────────────────────────────────────── (T+C)
│  Thành phẩm: bố cục đẹp, đa định dạng (banner/social/landing/KV).
│  Thể hiện HỆ THỐNG, không chỉ 1 ảnh.
├─ 6. RESULT / IMPACT ──────────────────────────────────── (C) ★
│  Số liệu nếu có (CTR, conversion, doanh thu, số biến thể, thời gian).
│  Không có số → kết quả định tính / phản hồi / trích brief.
├─ 7. AI-ASSISTED NOTE (nếu liên quan) ─────────────────── (T+C)
│  AI giúp scale/tăng tốc/nhất quán đa brand ra sao — đóng khung HIỆU SUẤT.
├─ NEXT PROJECT ────────────────────────────────────────── (T+C)
│  [← Prev]  [Tất cả dự án]  [Next →]
└─ CONTACT CTA (rút gọn) ───────────────────────────────── (T+C)
```
★ = hai block tạo nên sức mạnh Hybrid: **My Role** (cho job) + **Result** (cho client). Mỗi case study phải có cả hai.

### 3.4 About

```
┌─ INTRO ───────────────────────────────────────────────── (T+C)
│  Ảnh thật của Nhơn + H1 "Về tôi"
│  Định vị: ai, ~6 năm làm gì, giỏi nhất ở đâu.
├─ HOW I WORK ──────────────────────────────────────────── (T+C)
│  Cách làm việc + AI-assisted workflow (năng lực vận hành: tốc độ,
│  scale, nhất quán đa brand). KHÔNG liệt kê tên phần mềm.
├─ FOR TEAMS ───────────────────────────────────────────── (T)
│  1 đoạn: kiểu vai trò/team Nhơn phù hợp, cách cộng tác.
├─ FOR CLIENTS ─────────────────────────────────────────── (C)
│  1 đoạn: Nhơn giúp được loại khách/brand nào, giá trị mang lại.
├─ BRANDS / EXPERIENCE ─────────────────────────────────── (T+C)
│  Brand/công ty/ngành hàng từng làm (dải logo hoặc list).
└─ CTA → Contact / Download CV ─────────────────────────── (T+C)
```
**Không có:** tiểu sử đời tư dài, "đam mê từ nhỏ", skill %, icon phần mềm.

### 3.5 Services

> Cho client. Ngắn gọn, đặt sau Work. Chỉ liệt kê việc Nhơn **thật sự làm**.

```
┌─ HEADER ──────────────────────────────────────────────── (C)
│  H1: Services · Sub: "Tôi nhận các loại dự án sau."
├─ SERVICE LIST (3–5 nhóm) ─────────────────────────────── (C)
│  • Campaign & Key Visual — deliverable ngắn
│  • E-commerce / Marketplace Design — deliverable ngắn
│  • Landing Page Design — deliverable ngắn
│  • Visual System cho multi-brand — deliverable ngắn
│  (KHÔNG có: UI/UX, brand identity từ 0 — không phải năng lực thật)
├─ HOW WE START ────────────────────────────────────────── (C)
│  Quy trình làm việc 3–4 bước (brief → concept → production → handoff)
└─ CTA → Contact#projects ──────────────────────────────── (C)
```
**Không có:** bảng giá cứng (trừ khi Nhơn muốn), dịch vụ không làm thật.

### 3.6 Resume

> Cho recruiter. Có thể là trang gọn + nút Download PDF.

```
┌─ HEADER ──────────────────────────────────────────────── (T)
│  Tên · Định vị 1 dòng · [Download CV (PDF) ▸]
├─ EXPERIENCE ──────────────────────────────────────────── (T)
│  Timeline: vai trò · công ty/brand · năm · 1–2 gạch đầu dòng tác động
├─ SKILLS / FOCUS ──────────────────────────────────────── (T)
│  Campaign, E-commerce, Landing Page, Visual Systems, Multi-brand,
│  AI-assisted workflow (mô tả ngắn, KHÔNG dạng % bar)
├─ EDUCATION (ngắn) ────────────────────────────────────── (T)
└─ CONTACT ─────────────────────────────────────────────── (T)
```

### 3.7 Contact

```
┌─ HEADER ──────────────────────────────────────────────── (T+C)
│  H1: Liên hệ · Sub: "Open to full-time & freelance."
├─ TWO PATHS (anchor) ──────────────────────────────────── ★
│  ┌─ #teams (T) ──────────┐  ┌─ #projects (C) ─────────┐
│  │ "Cho team/tuyển dụng" │  │ "Cho dự án/client"      │
│  │ Email + LinkedIn      │  │ Email + "Book a call"   │
│  │ [Download CV]         │  │ mô tả nhanh nhu cầu     │
│  └───────────────────────┘  └─────────────────────────┘
├─ DIRECT ──────────────────────────────────────────────── (T+C)
│  Email click được (to, đậm) + LinkedIn + Behance/IG
│  (Form ngắn TÙY CHỌN: tên, email, 1 ô message)
└────────────────────────────────────────────────────────
```
★ = điểm rẽ nhánh duy nhất rõ ràng giữa 2 mục tiêu. Email luôn click được; không form dài.

---

## 4. Cơ chế định tuyến kép (dual-path)

Hybrid không tách 2 site — nó **dùng chung 80%** và rẽ nhánh ở vài điểm:

| Điểm chạm | Lớp Teams (T) | Lớp Clients (C) |
|---|---|---|
| Home CTA cuối | "Cho team / tuyển dụng" → /contact#teams | "Cho dự án / client" → /contact#projects |
| Header | Nút **Download CV** | (Services trong nav) |
| Case study | Block **My Role** | Block **Result/Impact** |
| About | Đoạn **For teams** | Đoạn **For clients** |
| Contact | Path #teams + CV | Path #projects + book a call |

**Mặc định nghiêng nhẹ về recruiter:** CV luôn ở header; định vị giọng điệu chuyên nghiệp craft-led; Services đặt *sau* Work chứ không phải trung tâm.

---

## 5. Content checklist Nhơn cần chuẩn bị

> Tài liệu/nội dung cần có TRƯỚC khi thiết kế — phần này quyết định 70% chất lượng.

- [ ] **4–6 dự án** chọn lọc (ưu tiên có kết quả đo được + đa dạng loại việc)
- [ ] Mỗi dự án: ảnh chất lượng cao, đa định dạng (banner/social/landing/KV)
- [ ] Mỗi dự án viết đủ: Context · **My Role** · Approach/Decisions · Solution · **Result**
- [ ] Số liệu kết quả nếu có (CTR, conversion, doanh thu, số biến thể, thời gian rút ngắn) — hoặc kết quả định tính/trích feedback
- [ ] 1–2 ghi chú AI-assisted workflow (dự án nào, giúp scale/tăng tốc ra sao)
- [ ] Ảnh chân dung thật cho About
- [ ] Định vị 1 dòng đã chốt
- [ ] Danh sách brand/công ty từng làm (+ logo nếu được phép dùng)
- [ ] 2–4 testimonials thật (tên, vai trò, công ty) — nếu xin được
- [ ] CV bản PDF cập nhật
- [ ] Email + LinkedIn + Behance/IG links

---

## 6. Nguyên tắc thiết kế khi triển khai

- **Tốc độ & rõ ràng > hiệu ứng.** Không loader, không scroll-jacking, không custom cursor. Ảnh tối ưu, mobile-first.
- **Case study là tài sản dùng chung** — đầu tư mạnh nhất ở đây, có lợi cho cả T lẫn C.
- **Mỗi block ghi rõ phục vụ ai (T/C/T+C)** để khi viết content không lạc giọng.
- **Trung thực năng lực:** không thêm UI/UX hay brand identity từ 0 ở bất kỳ đâu (Services, About, Skills).
- **Chọn lọc tàn nhẫn:** dự án yếu nhất định mức trần cảm nhận — cắt.
- **Linh hoạt tương lai:** muốn nghiêng A → giảm Services, nhấn CV/Role mạnh hơn. Muốn nghiêng B → đẩy Services + Testimonials lên, nhấn Result + CTA thuê. Khung không cần làm lại.

---

*Sẵn sàng cho bước thiết kế/code khi Nhơn duyệt cấu trúc này. Hiện tại vẫn chưa code.*
