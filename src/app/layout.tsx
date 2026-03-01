import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/Sidebar";
import { RightBackgroundGlow } from "@/components/RightBackgroundGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhanush K | Portfolio",
  description: "Portfolio of Dhanush K — CSE student at VIT Chennai specialising in AI/ML and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col md:flex-row bg-background text-foreground relative overflow-hidden">
            <RightBackgroundGlow />
            <Sidebar />
            <main className="flex-1 md:ml-60 w-full overflow-x-hidden relative z-10">
              <div className="max-w-6xl mx-auto w-full">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
