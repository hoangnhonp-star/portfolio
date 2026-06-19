"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggle: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);
const STORAGE_KEY = "phn-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Mặc định dark — script chống FOUC trong <head> đã set data-theme trước khi paint
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  // Đồng bộ state với giá trị đã lưu (hoặc giá trị script đặt sẵn trên <html>)
  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      setThemeState(saved);
    } else {
      const current = document.documentElement.getAttribute("data-theme");
      if (current === "light") setThemeState("light");
    }
    setMounted(true);
  }, []);

  // CHỈ ghi attribute sau khi đã đọc xong giá trị đã lưu — tránh đè "dark" mặc định
  // lên giá trị FOUC script đặt sẵn (gây nháy theme khi load).
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme, mounted]);

  const setTheme = (next: Theme) => {
    setThemeState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value: ThemeContextValue = {
    theme,
    setTheme,
    toggle: () => setTheme(theme === "dark" ? "light" : "dark"),
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
