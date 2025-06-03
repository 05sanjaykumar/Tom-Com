// app/(pages)/layout.tsx
'use client';

import { ThemeProvider } from "@/components/theme-provider";
import ModernNavbar from "@/components/Navbar";

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ModernNavbar />
      <main className="pt-24">{children}</main>
    </ThemeProvider>
  );
}
