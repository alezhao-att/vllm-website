import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vLLM - High-throughput LLM Inference",
  description:
    "High-throughput and memory-efficient LLM inference and serving engine",
  keywords: ["vLLM", "LLM", "inference", "AI", "machine learning", "deep learning", "PagedAttention", "GPU"],
  authors: [{ name: "vLLM Project" }],
  openGraph: {
    title: "vLLM - High-throughput LLM Inference",
    description: "High-throughput and memory-efficient LLM inference and serving engine",
    type: "website",
    url: "https://vllm.dev",
    siteName: "vLLM",
  },
  twitter: {
    card: "summary_large_image",
    title: "vLLM - High-throughput LLM Inference",
    description: "High-throughput and memory-efficient LLM inference and serving engine",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
