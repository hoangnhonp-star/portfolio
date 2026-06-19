import "./globals.css";
import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageProvider/LanguageProvider";
import { ThemeProvider } from "@/components/ThemeProvider/ThemeProvider";
import { SiteHeader } from "@/components/organisms/SiteHeader/SiteHeader";
import { SiteFooter } from "@/components/organisms/SiteFooter/SiteFooter";

export const metadata: Metadata = {
  title: "Phạm Hoàng Nhơn — Graphic Designer for Growth & Commerce",
  description:
    "Graphic designer with 6 years turning marketing briefs into scalable visual systems for campaigns, e-commerce, and multi-brand retail.",
};

// Chống FOUC: set data-theme từ localStorage TRƯỚC khi browser paint.
// Mặc định "dark" nếu chưa lưu lựa chọn nào.
const themeInitScript = `(function(){try{var t=localStorage.getItem('phn-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');}catch(e){document.documentElement.setAttribute('data-theme','dark');}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <SiteHeader />
            <main data-id="main">{children}</main>
            <SiteFooter />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
