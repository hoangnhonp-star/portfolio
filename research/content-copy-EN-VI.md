# Website Copy — Bilingual EN / VI

> **Mục đích:** Toàn bộ text cho portfolio, song ngữ **EN ↔ VI**, phục vụ nút chuyển ngôn ngữ.
> **Nguyên tắc:** Text TỰ kể chuyện được, không phụ thuộc chữ trong ảnh (ảnh không-chữ sẽ cấp sau).
> **Cách dùng:** Mỗi mục có `key` i18n → khi build sẽ thành `messages/en.json` + `messages/vi.json`.
> **Nguồn nội dung:** [extracted-project-content.md](extracted-project-content.md) + CV thật.
> **Ngày:** 2026-06-15 · **Trạng thái:** Bản nháp copy — chờ Nhơn duyệt.

---

## 0. Ghi chú i18n (cho bước build)

- Cấu trúc key: `{page}.{block}.{element}` — vd `home.hero.title`.
- Mặc định ngôn ngữ: **VI** (thị trường tuyển dụng/khách hàng chính ở VN), nút toggle EN.
- Tên riêng giữ nguyên ở cả 2 ngôn ngữ: *Phạm Hoàng Nhơn*, tên brand (Thegioididong, Điện máy XANH, TopZone, FLYCO...), tên sản phẩm (iPhone 17 Pro).
- Cụm ngành quen dùng tiếng Anh trong nghề (Campaign, E-commerce, Visual System, Landing Page) giữ tiếng Anh trong bản VI để tự nhiên.

---

## 1. Global UI (header / footer / chung)

**nav.work** — EN: `Work` · VI: `Dự án`
**nav.about** — EN: `About` · VI: `Giới thiệu`
**nav.services** — EN: `Services` · VI: `Dịch vụ`
**nav.contact** — EN: `Contact` · VI: `Liên hệ`
**nav.cv** — EN: `Download CV` · VI: `Tải CV`
**lang.toggle** — EN: `VI` (bấm để sang tiếng Việt) · VI: `EN` (bấm để sang tiếng Anh)

**footer.tagline** — EN: `Phạm Hoàng Nhơn — Graphic Designer for Growth & Commerce` · VI: `Phạm Hoàng Nhơn — Graphic Designer cho Growth & Commerce`
**footer.status** — EN: `Open to full-time roles & freelance projects` · VI: `Sẵn sàng cho vị trí full-time & dự án freelance`
**footer.email** — `hoangnhonp@gmail.com` (cả 2)
**footer.phone** — `036 9956 118` (cả 2)
**footer.behance** — `behance.net/hoangnhon` (cả 2)
**footer.rights** — EN: `© 2026 Phạm Hoàng Nhơn. All rights reserved.` · VI: `© 2026 Phạm Hoàng Nhơn. Mọi quyền được bảo lưu.`

---

## 2. Home

**home.hero.eyebrow** — EN: `Graphic Designer · Campaign & E-commerce` · VI: `Graphic Designer · Campaign & E-commerce`
**home.hero.title** — EN: `Design that moves products — at the scale of a campaign.` · VI: `Thiết kế bán được hàng — ở quy mô một chiến dịch.`
**home.hero.subtitle** — EN: `I'm Phạm Hoàng Nhơn, a graphic designer with 6 years turning marketing briefs into scalable visual systems for campaigns, e-commerce, and multi-brand retail.` · VI: `Tôi là Phạm Hoàng Nhơn, graphic designer 6 năm kinh nghiệm, biến brief marketing thành hệ thống visual có thể mở rộng cho campaign, e-commerce và bán lẻ đa thương hiệu.`
**home.hero.ctaPrimary** — EN: `View work` · VI: `Xem dự án`
**home.hero.ctaSecondary** — EN: `Get in touch` · VI: `Liên hệ`

**home.work.eyebrow** — EN: `Selected Work` · VI: `Dự án tiêu biểu`
**home.work.title** — EN: `Three projects, three problems solved.` · VI: `Ba dự án, ba bài toán được giải.`
**home.work.subtitle** — EN: `Each shows a different facet: AI-accelerated production, multi-brand systems, and high-pressure launch execution.` · VI: `Mỗi dự án thể hiện một khía cạnh: sản xuất tăng tốc bằng AI, hệ thống đa thương hiệu, và thực thi chiến dịch ra mắt áp lực cao.`
**home.work.viewCase** — EN: `View case study` · VI: `Xem case study`

**home.trust.label** — EN: `Brands I've designed for` · VI: `Các thương hiệu tôi từng thiết kế`
> (logo: Thegioididong, Điện máy XANH, TopZone, Điện Quang, Diamond Beauty — cấp sau)

**home.about.eyebrow** — EN: `About` · VI: `Giới thiệu`
**home.about.text** — EN: `Six years across retail and e-commerce taught me one thing: good design isn't decoration — it's a business decision. I build visual systems that stay consistent across dozens of assets, multiple brands, and tight deadlines.` · VI: `Sáu năm trong mảng bán lẻ và e-commerce dạy tôi một điều: thiết kế tốt không phải để trang trí — nó là một quyết định kinh doanh. Tôi xây những hệ thống visual giữ được sự nhất quán qua hàng chục asset, nhiều thương hiệu và deadline gấp.`
**home.about.cta** — EN: `More about me` · VI: `Tìm hiểu thêm về tôi`

**home.contact.title** — EN: `Looking for a designer — for your team or your project?` · VI: `Bạn đang tìm một designer — cho team hay cho dự án?`
**home.contact.ctaTeams** — EN: `For teams & recruiters` · VI: `Cho team & nhà tuyển dụng`
**home.contact.ctaProjects** — EN: `For projects & clients` · VI: `Cho dự án & khách hàng`

---

## 3. About

**about.title** — EN: `About` · VI: `Giới thiệu`
**about.intro** — EN: `I'm Phạm Hoàng Nhơn, a graphic designer based in Ho Chi Minh City with around 6 years of experience in campaign and e-commerce design. I currently design for major retail brands at Mobile World Group, where my work spans key visuals, banners, landing pages, and the scalable systems that hold large campaigns together.` · VI: `Tôi là Phạm Hoàng Nhơn, graphic designer tại TP.HCM với khoảng 6 năm kinh nghiệm trong campaign và e-commerce design. Hiện tôi thiết kế cho các thương hiệu bán lẻ lớn tại Mobile World Group — từ key visual, banner, landing page đến những hệ thống có thể mở rộng giúp các chiến dịch lớn giữ được sự nhất quán.`

**about.howiwork.title** — EN: `How I work` · VI: `Cách tôi làm việc`
**about.howiwork.text** — EN: `I think in systems, not single assets. A campaign is rarely one banner — it's dozens of variations across brands, sizes, and placements that must stay on-brand under pressure. I use AI to accelerate exploration and production, but every final decision stays human: AI generates possibilities, the designer makes the call.` · VI: `Tôi tư duy theo hệ thống, không theo từng asset đơn lẻ. Một chiến dịch hiếm khi chỉ là một banner — nó là hàng chục biến thể qua nhiều brand, kích thước và vị trí, tất cả phải đúng nhận diện dưới áp lực thời gian. Tôi dùng AI để tăng tốc khám phá và sản xuất, nhưng mọi quyết định cuối cùng vẫn là của con người: AI tạo ra khả năng, designer là người ra quyết định.`

**about.forteams.title** — EN: `For teams` · VI: `Cho team tuyển dụng`
**about.forteams.text** — EN: `I fit teams that ship a lot, fast — retail, e-commerce, and performance marketing — where consistency and turnaround both matter. I'm comfortable owning a campaign's visual system end to end and collaborating with marketing, product, and other designers.` · VI: `Tôi phù hợp với những team sản xuất nhiều và nhanh — bán lẻ, e-commerce, performance marketing — nơi cả sự nhất quán lẫn tốc độ đều quan trọng. Tôi quen với việc làm chủ toàn bộ hệ thống visual của một chiến dịch và phối hợp với marketing, product và các designer khác.`

**about.forclients.title** — EN: `For clients` · VI: `Cho khách hàng`
**about.forclients.text** — EN: `I help brands and marketing teams turn seasonal pushes and product launches into design that performs — built as a system so it scales across channels without losing quality. If you need campaign visuals, landing pages, or a multi-brand asset system, I can help.` · VI: `Tôi giúp các thương hiệu và team marketing biến những đợt push theo mùa hay ra mắt sản phẩm thành thiết kế có hiệu quả — xây theo hệ thống để mở rộng qua nhiều kênh mà không mất chất lượng. Nếu bạn cần campaign visual, landing page, hay một hệ thống asset đa thương hiệu, tôi có thể hỗ trợ.`

**about.brands.title** — EN: `Experience` · VI: `Kinh nghiệm`
**about.brands.text** — EN: `Mobile World Group (Thegioididong, Điện máy XANH, TopZone), Điện Quang, Diamond Beauty Clinic, and freelance.` · VI: `Mobile World Group (Thegioididong, Điện máy XANH, TopZone), Điện Quang, Diamond Beauty Clinic, và freelance.`

---

## 4. Services

**services.title** — EN: `Services` · VI: `Dịch vụ`
**services.subtitle** — EN: `What I take on. Built as systems, delivered production-ready.` · VI: `Những việc tôi nhận. Xây theo hệ thống, bàn giao sẵn sàng sản xuất.`

**services.item.campaign.title** — EN: `Campaign & Key Visual` · VI: `Campaign & Key Visual`
**services.item.campaign.text** — EN: `Concept and key visuals for seasonal and product campaigns, plus the full asset set to roll them out.` · VI: `Concept và key visual cho campaign theo mùa và theo sản phẩm, kèm trọn bộ asset để triển khai.`

**services.item.ecommerce.title** — EN: `E-commerce & Marketplace Design` · VI: `E-commerce & Marketplace Design`
**services.item.ecommerce.text** — EN: `Banners, product visuals, and promotional assets optimized for online retail and marketplace placements.` · VI: `Banner, hình ảnh sản phẩm và asset khuyến mãi tối ưu cho bán lẻ online và các vị trí trên sàn.`

**services.item.landing.title** — EN: `Landing Page Design` · VI: `Landing Page Design`
**services.item.landing.text** — EN: `Conversion-focused landing pages for launches and promotions, designed for both desktop and mobile.` · VI: `Landing page hướng chuyển đổi cho các đợt ra mắt và khuyến mãi, thiết kế cho cả desktop và mobile.`

**services.item.system.title** — EN: `Multi-brand Visual Systems` · VI: `Hệ thống Visual đa thương hiệu`
**services.item.system.text** — EN: `Scalable, variable-driven systems that keep one campaign consistent across multiple brands and dozens of assets.` · VI: `Hệ thống có thể mở rộng, vận hành theo biến (variable), giữ một chiến dịch nhất quán qua nhiều thương hiệu và hàng chục asset.`

**services.process.title** — EN: `How we start` · VI: `Bắt đầu thế nào`
**services.process.step1** — EN: `1. Brief — we align on objective, scope, and timeline.` · VI: `1. Brief — thống nhất mục tiêu, phạm vi và thời gian.`
**services.process.step2** — EN: `2. Concept — visual direction and key visual.` · VI: `2. Concept — định hướng visual và key visual.`
**services.process.step3** — EN: `3. Production — full asset system, built to scale.` · VI: `3. Sản xuất — trọn bộ hệ thống asset, xây để mở rộng.`
**services.process.step4** — EN: `4. Handoff — production-ready files and guidelines.` · VI: `4. Bàn giao — file sẵn sàng sản xuất kèm hướng dẫn.`
**services.cta** — EN: `Start a project` · VI: `Bắt đầu một dự án`

---

## 5. Resume

**resume.title** — EN: `Resume` · VI: `Hồ sơ năng lực`
**resume.subtitle** — EN: `Graphic Designer — Campaign & E-commerce Design · Ho Chi Minh City` · VI: `Graphic Designer — Campaign & E-commerce Design · TP. Hồ Chí Minh`
**resume.cta** — EN: `Download CV (PDF)` · VI: `Tải CV (PDF)`

**resume.experience.title** — EN: `Experience` · VI: `Kinh nghiệm`

**resume.exp.mwg.role** — `Graphic Designer` (cả 2) · **.company** — `Mobile World Group (MWG)` · **.period** — `2024 – Present` / `2024 – Nay`
**resume.exp.mwg.desc** — EN: `Develop campaign key visuals and promotional assets for major retail brands. Build scalable asset systems for large-scale campaigns. Design banners, landing pages, and e-commerce visuals across multiple brands. Explore AI-assisted workflows to accelerate production.` · VI: `Phát triển key visual và asset khuyến mãi cho các thương hiệu bán lẻ lớn. Xây hệ thống asset có thể mở rộng cho các chiến dịch quy mô lớn. Thiết kế banner, landing page và hình ảnh e-commerce cho nhiều thương hiệu. Ứng dụng workflow AI để tăng tốc sản xuất.`

**resume.exp.diamond.company** — `Diamond Beauty Clinic` · **.period** — `2023 – 2024`
**resume.exp.diamond.desc** — EN: `Designed social media posts, standees, and landing pages. Basic video editing with CapCut.` · VI: `Thiết kế bài social media, standee và landing page. Dựng video cơ bản bằng CapCut.`

**resume.exp.dienquang.company** — `Điện Quang Group JSC` · **.period** — `2022 – 2023`
**resume.exp.dienquang.desc** — EN: `Designed packaging and checked print quality. Created banners, backdrops, brochures, vouchers, and landing pages for internal communications.` · VI: `Thiết kế bao bì và kiểm tra chất lượng in. Thực hiện banner, backdrop, brochure, voucher và landing page cho truyền thông nội bộ.`

**resume.exp.upmedia.company** — `UP Media + Freelance` · **.period** — `2020 – 2022`
**resume.exp.upmedia.desc** — EN: `Designed online advertising banners, posters, and flyers. Produced merchandise prints (t-shirts, blankets, and similar items).` · VI: `Thiết kế banner quảng cáo online, poster và tờ rơi. Thiết kế in ấn merchandise (áo thun, chăn và các sản phẩm tương tự).`

**resume.skills.title** — EN: `Skills` · VI: `Kỹ năng`
**resume.skills.list** — EN: `Campaign Design · E-commerce Design · Visual Systems · AI-Assisted Workflow` · VI: `Campaign Design · E-commerce Design · Visual Systems · AI-Assisted Workflow`
**resume.tools.title** — EN: `Tools` · VI: `Công cụ`
**resume.tools.list** — `Photoshop · Illustrator · After Effects · InDesign · Figma · CapCut` (cả 2)
**resume.education.title** — EN: `Education` · VI: `Học vấn`
**resume.education.text** — EN: `Dong Nai University` · VI: `Đại học Đồng Nai`

---

## 6. Contact

**contact.title** — EN: `Let's talk` · VI: `Cùng trao đổi`
**contact.subtitle** — EN: `Open to full-time roles and freelance projects.` · VI: `Sẵn sàng cho vị trí full-time và dự án freelance.`

**contact.teams.title** — EN: `For teams & recruiters` · VI: `Cho team & nhà tuyển dụng`
**contact.teams.text** — EN: `Hiring a graphic designer? Reach out by email or LinkedIn, or grab my CV.` · VI: `Đang tuyển graphic designer? Liên hệ qua email hoặc LinkedIn, hoặc tải CV của tôi.`
**contact.teams.cta** — EN: `Download CV` · VI: `Tải CV`

**contact.projects.title** — EN: `For projects & clients` · VI: `Cho dự án & khách hàng`
**contact.projects.text** — EN: `Have a campaign, launch, or landing page in mind? Tell me about it — I usually reply within a day.` · VI: `Bạn đang có một campaign, đợt ra mắt hay landing page? Hãy chia sẻ với tôi — tôi thường phản hồi trong vòng một ngày.`
**contact.projects.cta** — EN: `Email me` · VI: `Gửi email`

**contact.direct.label** — EN: `Direct` · VI: `Liên hệ trực tiếp`
**contact.direct.email** — `hoangnhonp@gmail.com` · **.phone** — `036 9956 118` · **.behance** — `behance.net/hoangnhon`

---

## 7. Project 01 — Designing with AI, Not by AI

**p1.title** — EN: `Designing with AI, Not by AI` · VI: `Designing with AI, Not by AI`
**p1.tagline** — EN: `AI generates possibilities. Designers make decisions.` · VI: `AI tạo ra khả năng. Designer là người ra quyết định.`
**p1.meta.role** — EN: `Role: Graphic Designer (concept, system, production)` · VI: `Vai trò: Graphic Designer (concept, hệ thống, sản xuất)`
**p1.meta.type** — EN: `Type: AI-assisted workflow study` · VI: `Loại: Nghiên cứu workflow ứng dụng AI`
**p1.meta.context** — EN: `Context: Retail campaign production, Mobile World Group` · VI: `Bối cảnh: Sản xuất campaign bán lẻ, Mobile World Group`

**p1.short** — EN: `A collection of real campaign work exploring how AI accelerates creative production while design judgment stays essential — across banners, character systems, and large-scale asset variations.` · VI: `Tập hợp các dự án campaign thực tế, khám phá cách AI tăng tốc sản xuất sáng tạo trong khi tư duy thiết kế vẫn là yếu tố cốt lõi — qua banner, hệ thống nhân vật và biến thể asset quy mô lớn.`

**p1.context.title** — EN: `The question` · VI: `Câu hỏi đặt ra`
**p1.context.text** — EN: `AI can produce visuals fast — but speed isn't the same as good design. The real question on commercial work is: where should AI do the heavy lifting, and where must human judgment stay in control? This project maps that decision across real campaign tasks.` · VI: `AI có thể tạo hình ảnh rất nhanh — nhưng nhanh không đồng nghĩa với thiết kế tốt. Câu hỏi thật sự trong công việc thương mại là: AI nên gánh phần nào, và phần nào bắt buộc giữ phán đoán của con người? Dự án này vẽ ra ranh giới đó qua các đầu việc campaign thực tế.`

**p1.myrole.title** — EN: `My role` · VI: `Vai trò của tôi`
**p1.myrole.text** — EN: `I designed the framework and made every final call: defining when to optimize for effort versus creative control, directing AI exploration, selecting and refining outputs, and building the production systems. AI was a tool in my workflow — not the author.` · VI: `Tôi thiết kế khung tư duy và đưa ra mọi quyết định cuối: xác định khi nào tối ưu cho tốc độ và khi nào cần kiểm soát sáng tạo, định hướng quá trình khám phá bằng AI, chọn lọc và tinh chỉnh kết quả, và xây dựng các hệ thống sản xuất. AI là công cụ trong workflow của tôi — không phải tác giả.`

**p1.approach.title** — EN: `One tool, different levels of execution` · VI: `Một công cụ, nhiều mức độ thực thi`
**p1.approach.effort.title** — EN: `Effort Optimization` · VI: `Tối ưu công sức`
**p1.approach.effort.text** — EN: `For short timelines and clear objectives, AI streamlines routine production. Example: a clean, premium FLYCO personal-care banner — standard request, clear objective, production-ready output, deployed with zero manual rework.` · VI: `Với deadline ngắn và mục tiêu rõ ràng, AI giúp tinh gọn phần sản xuất lặp lại. Ví dụ: banner FLYCO chăm sóc cá nhân, sạch và premium — yêu cầu chuẩn, mục tiêu rõ, output sẵn sàng sản xuất, triển khai mà không cần chỉnh tay.`
**p1.approach.control.title** — EN: `Creative Control` · VI: `Kiểm soát sáng tạo`
**p1.approach.control.text** — EN: `When visual hierarchy and campaign impact matter, human involvement goes deeper. For an interactive summer game, AI explored expressions but the game logic defined the final character system: a sun mascot with four states — Angry, Sweating, Worried, Relaxed — each mapped to a gameplay stage from extreme heat to cool relief.` · VI: `Khi cấu trúc thị giác và sức nặng của chiến dịch là quan trọng, con người tham gia sâu hơn. Với một game tương tác mùa hè, AI khám phá các biểu cảm nhưng logic game mới định hình hệ thống nhân vật cuối: một mascot mặt trời với bốn trạng thái — Giận dữ, Đổ mồ hôi, Lo lắng, Thư giãn — mỗi trạng thái gắn với một chặng chơi, từ nắng gắt đến dịu mát.`

**p1.solution.title** — EN: `Scaling from single assets to a system` · VI: `Mở rộng từ asset đơn lẻ thành hệ thống`
**p1.solution.text** — EN: `Real campaigns needed dozens of thumbnail variations across brands, promotions, and product categories — sale themes, AI-feature callouts, warranty badges, tech themes. AI accelerated exploration and iteration; I selected, refined, and aligned everything to brand requirements so assets were ready to deploy.` · VI: `Các chiến dịch thực tế cần hàng chục biến thể thumbnail qua nhiều brand, chương trình và ngành hàng — theme khuyến mãi, điểm nhấn tính năng AI, badge bảo hành, theme công nghệ. AI tăng tốc khám phá và lặp; tôi chọn lọc, tinh chỉnh và canh chỉnh tất cả theo yêu cầu thương hiệu để asset sẵn sàng triển khai.`

**p1.result.title** — EN: `The takeaway` · VI: `Điều đúc kết`
**p1.result.text** — EN: `A clear workflow emerged: Explore → Create → Scale → Decide. AI multiplies options, accelerates production, and helps systems scale — but human judgment guarantees the final quality. AI generates possibilities; the designer makes the decision.` · VI: `Một workflow rõ ràng hình thành: Khám phá → Tạo → Mở rộng → Quyết định. AI nhân lên lựa chọn, tăng tốc sản xuất và giúp hệ thống mở rộng — nhưng phán đoán của con người mới đảm bảo chất lượng cuối. AI tạo ra khả năng; designer là người ra quyết định.`

---

## 8. Project 02 — Halloween Multi-Brand Campaign

**p2.title** — EN: `Halloween Campaign 2025 — One System, Two Brands` · VI: `Halloween Campaign 2025 — Một hệ thống, Hai thương hiệu`
**p2.tagline** — EN: `One campaign system. Two brand expressions.` · VI: `Một hệ thống chiến dịch. Hai cách thể hiện thương hiệu.`
**p2.meta.role** — EN: `Role: Campaign visual system, multi-brand adaptation, game design` · VI: `Vai trò: Hệ thống visual chiến dịch, thích ứng đa thương hiệu, thiết kế game`
**p2.meta.type** — EN: `Type: Seasonal campaign · October 2025` · VI: `Loại: Chiến dịch theo mùa · Tháng 10/2025`
**p2.meta.brands** — EN: `Brands: Thegioididong × Điện máy XANH` · VI: `Thương hiệu: Thegioididong × Điện máy XANH`

**p2.short** — EN: `A scalable Halloween campaign system shared across two retail brands — unified by a seasonal theme, differentiated by each brand's identity.` · VI: `Hệ thống chiến dịch Halloween có thể mở rộng, dùng chung cho hai thương hiệu bán lẻ — hợp nhất bởi theme theo mùa, khác biệt bởi nhận diện riêng của mỗi brand.`

**p2.context.title** — EN: `The challenge` · VI: `Thách thức`
**p2.context.text** — EN: `Create one shared Halloween campaign across Thegioididong and Điện máy XANH — covering desktop and mobile, a landing-page ecosystem, promotional assets, and an interactive game — while preserving each brand's visual identity.` · VI: `Tạo một chiến dịch Halloween dùng chung cho Thegioididong và Điện máy XANH — phủ desktop và mobile, hệ sinh thái landing page, asset khuyến mãi và một game tương tác — trong khi vẫn giữ nhận diện riêng của từng thương hiệu.`

**p2.myrole.title** — EN: `My role` · VI: `Vai trò của tôi`
**p2.myrole.text** — EN: `I owned the campaign visual system, adapted it across both brands, designed the interactive game, and produced the promotional asset set.` · VI: `Tôi làm chủ hệ thống visual của chiến dịch, thích ứng nó cho cả hai thương hiệu, thiết kế game tương tác và sản xuất bộ asset khuyến mãi.`

**p2.approach.title** — EN: `Shared layer, distinct expressions` · VI: `Lớp dùng chung, cách thể hiện riêng`
**p2.approach.text** — EN: `A shared campaign layer carried the Halloween concept, the game experience, and the reward mechanics. On top, each brand expressed itself: Thegioididong in a purple palette for consumer electronics, Điện máy XANH in blue for home appliances. A deliberate trade-off: I prioritized campaign identity over strict brand-color consistency to make the Halloween moment instantly recognizable.` · VI: `Một lớp chiến dịch dùng chung mang concept Halloween, trải nghiệm game và cơ chế phần thưởng. Bên trên, mỗi thương hiệu thể hiện riêng: Thegioididong với tông tím cho điện tử tiêu dùng, Điện máy XANH với tông xanh cho điện máy gia dụng. Một đánh đổi có chủ đích: tôi ưu tiên nhận diện chiến dịch hơn việc bám chặt màu thương hiệu, để khoảnh khắc Halloween được nhận ra ngay lập tức.`

**p2.solution.title** — EN: `From one hero banner to a full asset system` · VI: `Từ một hero banner đến trọn bộ hệ thống asset`
**p2.solution.text** — EN: `The visual framework scaled into a complete set: hero banners for desktop and mobile, promotional section headers, 10+ category tagline variations, 10+ web placements, and 3+ editable social templates. The interactive "magic wheel" game ran on one framework with multiple reward states — entry, spin, and reward outcomes — reused consistently across desktop and mobile.` · VI: `Khung visual mở rộng thành một bộ hoàn chỉnh: hero banner cho desktop và mobile, header cho các section khuyến mãi, hơn 10 biến thể tagline theo ngành hàng, hơn 10 vị trí trên web, và hơn 3 template social có thể chỉnh sửa. Game "vòng quay ma thuật" chạy trên một framework duy nhất với nhiều trạng thái phần thưởng — màn vào, quay, và kết quả — tái sử dụng nhất quán trên cả desktop lẫn mobile.`

**p2.result.title** — EN: `Reflection: campaign identity vs brand identity` · VI: `Đúc kết: nhận diện chiến dịch và nhận diện thương hiệu`
**p2.result.text** — EN: `The result was strong seasonal recognition, a cohesive experience across both brands, and a consistent mood across every touchpoint. Looking back, I'd explore retaining more of each brand's signature cues — stronger use of brand color and typography — while keeping the Halloween mood. The real lesson: every visual decision is a trade-off, and the goal is the balance that best serves both the campaign and the brand.` · VI: `Kết quả là nhận diện theo mùa rất mạnh, một trải nghiệm liền mạch trên cả hai thương hiệu, và một tông cảm xúc nhất quán ở mọi điểm chạm. Nhìn lại, tôi sẽ thử giữ nhiều hơn các tín hiệu đặc trưng của mỗi brand — dùng màu và typography thương hiệu đậm hơn — trong khi vẫn giữ không khí Halloween. Bài học thật sự: mọi quyết định thị giác đều là một sự đánh đổi, và mục tiêu là tìm điểm cân bằng phục vụ tốt nhất cho cả chiến dịch lẫn thương hiệu.`

---

## 9. Project 03 — iPhone 17 Pro Launch

**p3.title** — EN: `iPhone 17 Pro Launch — Built for the Reveal` · VI: `iPhone 17 Pro Launch — Sẵn sàng cho giờ G`
**p3.tagline** — EN: `Designed for consistency. Built for adaptation.` · VI: `Thiết kế để nhất quán. Xây để thích ứng.`
**p3.meta.role** — EN: `Role: Campaign adaptation, visual system design, landing-page execution` · VI: `Vai trò: Thích ứng chiến dịch, thiết kế hệ thống visual, thực thi landing page`
**p3.meta.type** — EN: `Type: Product launch campaign · September 2025` · VI: `Loại: Chiến dịch ra mắt sản phẩm · Tháng 9/2025`
**p3.meta.brands** — EN: `Brands: TopZone × Thegioididong` · VI: `Thương hiệu: TopZone × Thegioididong`

**p3.short** — EN: `A variable-driven campaign system that delivered a unified iPhone 17 Pro launch across two brands, three phases, and two platforms — engineered to absorb Apple's assets the moment they dropped.` · VI: `Một hệ thống chiến dịch vận hành theo biến (variable), mang đến một đợt ra mắt iPhone 17 Pro nhất quán qua hai thương hiệu, ba giai đoạn và hai nền tảng — được thiết kế để hấp thụ asset của Apple ngay khi chúng xuất hiện.`

**p3.context.title** — EN: `The challenge` · VI: `Thách thức`
**p3.context.text** — EN: `Adapt Apple's launch assets into a scalable campaign system across two brands and three launch phases — under tough constraints: the final assets were unknown until Apple's keynote, and the turnaround was 18 hours.` · VI: `Thích ứng asset ra mắt của Apple thành một hệ thống chiến dịch có thể mở rộng, qua hai thương hiệu và ba giai đoạn ra mắt — dưới những ràng buộc khắc nghiệt: asset cuối cùng không hề biết trước cho đến keynote của Apple, và thời gian xử lý chỉ 18 giờ.`

**p3.myrole.title** — EN: `My role` · VI: `Vai trò của tôi`
**p3.myrole.text** — EN: `I handled campaign adaptation, designed the visual system, ensured consistency across both brands, and executed the landing pages.` · VI: `Tôi phụ trách thích ứng chiến dịch, thiết kế hệ thống visual, đảm bảo nhất quán trên cả hai thương hiệu và thực thi landing page.`

**p3.approach.title** — EN: `One source of truth, two output flows` · VI: `Một nguồn chuẩn duy nhất, hai luồng đầu ra`
**p3.approach.text** — EN: `I built a scalable file structure and a variable-driven system — one source of truth holding components, variables, design standards, and shared assets. From it, two output flows: one for production (deployment assets, technical handoff) and one for review (presentation-ready, stakeholder alignment). Brand colors lived as variables (TopZone red, Thegioididong yellow), so a single system could re-skin itself per brand instantly.` · VI: `Tôi xây một cấu trúc file có thể mở rộng và một hệ thống vận hành theo biến — một nguồn chuẩn duy nhất chứa component, biến, design standard và asset dùng chung. Từ đó tách hai luồng đầu ra: một cho sản xuất (asset triển khai, bàn giao kỹ thuật) và một cho duyệt (sẵn sàng trình bày, thống nhất với stakeholder). Màu thương hiệu được lưu dưới dạng biến (đỏ TopZone, vàng Thegioididong), nên một hệ thống duy nhất có thể tự đổi nhận diện theo từng brand ngay lập tức.`

**p3.solution.title** — EN: `Three phases, two platforms` · VI: `Ba giai đoạn, hai nền tảng`
**p3.solution.text** — EN: `The same core visual system carried the campaign through every phase, while an adaptive content layer let messaging and offers evolve: from teasing and countdown, to the reveal, to pre-order conversion — each rolled out on both desktop and mobile, for both brands.` · VI: `Cùng một hệ thống visual lõi mang chiến dịch đi qua mọi giai đoạn, trong khi một lớp nội dung thích ứng cho phép thông điệp và ưu đãi thay đổi: từ teasing và đếm ngược, đến giờ công bố, rồi chuyển đổi đặt trước — mỗi giai đoạn triển khai trên cả desktop và mobile, cho cả hai thương hiệu.`

**p3.result.title** — EN: `The result` · VI: `Kết quả`
**p3.result.text** — EN: `When Apple's keynote ended, the variable-driven system absorbed the official assets and messaging within minutes — staying consistent across both brands. The landing pages went live at 06:00 AM, ahead of competitors. A system built to handle uncertainty, without sacrificing consistency.` · VI: `Khi keynote của Apple kết thúc, hệ thống vận hành theo biến đã hấp thụ asset và thông điệp chính thức chỉ trong vài phút — vẫn nhất quán trên cả hai thương hiệu. Các landing page lên sóng lúc 06:00 sáng, sớm hơn đối thủ. Một hệ thống được xây để xử lý sự bất định, mà không hi sinh tính nhất quán.`

---

## 10. Bước tiếp theo

- Nhơn duyệt/chỉnh copy (đặc biệt phần VI cho tự nhiên đúng giọng của bạn).
- Sau khi chốt copy → build với i18n (VI mặc định + toggle EN), chừa chỗ ảnh không-chữ để bạn cấp sau.
- Ảnh: bạn sẽ cung cấp bản **không chữ**; tôi sẽ map vào đúng section theo [extracted-project-content.md](extracted-project-content.md) §E.

*Chưa code. Chờ Nhơn duyệt copy.*
