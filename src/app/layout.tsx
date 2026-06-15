import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider/LanguageProvider";
import { SiteHeader } from "@/components/organisms/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";

export const metadata: Metadata = {
  title: "Phạm Hoàng Nhơn — Graphic Designer for Growth & Commerce",
  description:
    "Graphic designer with 6 years turning marketing briefs into scalable visual systems for campaigns, e-commerce, and multi-brand retail.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>
        <LanguageProvider>
          <SiteHeader />
          <main data-id="main">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
