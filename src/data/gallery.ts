// Tuyển tập thiết kế (Visual Archive).
// `ratio` lấy đúng kích thước pixel thật của ảnh → masonry xếp chuẩn, không layout shift.
// Ảnh đặt tại /public/gallery/ — đặt tên lowercase-gạch-nối, không dấu/space.

export type GalleryItem = {
  id: string;
  /** aspect-ratio khung = "width/height" (pixel thật) — tạo masonry */
  ratio: string;
  /** nhãn loại design hiện khi hover (màu accent) */
  category: string;
  /** tên ngắn của thiết kế */
  title: string;
  /** đường dẫn ảnh; bỏ trống → placeholder */
  src?: string;
};

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    ratio: "1500/1875",
    category: "Key Visual",
    title: "Trà Nhãn Sen — Gong Cha",
    src: "/gallery/tra-nhan-sen-Gongcha.webp",
  },
  {
    id: "g2",
    ratio: "1085/1450",
    category: "Key Visual",
    title: "Đồng hồ cao cấp — Ưu đãi Online Only",
    src: "/gallery/dong-ho-cao-cap.webp",
  },
  {
    id: "g3",
    ratio: "1440/2000",
    category: "Banner",
    title: "Thiết bị chăm sóc cá nhân — FLYCO",
    src: "/gallery/flyco-cham-soc-ca-nhan.webp",
  },
  {
    id: "g4",
    ratio: "720/920",
    category: "Game",
    title: "Game mùa nóng 2026",
    src: "/gallery/game-mua-nong-2026.webp",
  },
  {
    id: "g5",
    ratio: "1440/2000",
    category: "Campaign",
    title: "Halloween — Điện máy XANH",
    src: "/gallery/haloween-dmx.webp",
  },
  {
    id: "g6",
    ratio: "1/1",
    category: "Key Visual",
    title: "Tuần lễ thể thao Smartwatch",
    src: "/gallery/smartwatch-sale-kv.webp",
  },
  {
    id: "g7",
    ratio: "16/9",
    category: "Social",
    title: "Cover fanpage — Spa đông y Tĩnh An",
    src: "/gallery/spa-dong-y-Tinh_An.webp",
  },
  {
    id: "g8",
    ratio: "474/1064",
    category: "In ấn",
    title: "Standee 8/3 — TMV Diamond",
    src: "/gallery/Standee-8-thang-3-240307-Diamond.jpg",
  },
  {
    id: "g9",
    ratio: "2400/1000",
    category: "Game",
    title: "Game Cá tháng Tư — TGDĐ × ĐMX",
    src: "/gallery/BANNER-GAME-ca-thang-tu-2025.webp",
  },
];
