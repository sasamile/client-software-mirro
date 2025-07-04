import { Toaster } from "sonner";
import Script from "next/script";
import type { Metadata } from "next";
import { Poppins, Rubik, Outfit, Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { ThemeProvider } from "@/components/providers/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Acadix",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Inline script to apply the theme before rendering */}
        <Script id="theme-script" strategy="beforeInteractive">
          {`
            (function() {
              try {
                // Lee el tema desde localStorage
                const themeConfig = JSON.parse(localStorage.getItem('theme-config') || '{}');
                const colorScheme = themeConfig?.state?.config?.colorScheme || 'blue';
                // Aplica la clase al elemento <html>
                document.documentElement.classList.add('theme-' + colorScheme);
              } catch (e) {
                // Si hay un error, usa el tema por defecto
                document.documentElement.classList.add('theme-blue');
              }
            })();
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${rubik.variable} ${outfit.variable} antialiased`}
      >
        <Toaster richColors />
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
