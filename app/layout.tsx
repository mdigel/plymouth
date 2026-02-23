import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PostHogProvider from "@/components/PostHogProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://plymouthapplabs.com"),
  title: {
    default: "Plymouth App Labs — Premium Utility iOS Apps",
    template: "%s | Plymouth App Labs",
  },
  description:
    "Discover premium utility apps without monthly fees.",
  keywords: [
    "Plymouth App Labs",
    "SwipeCardz",
    "Golden Loopz",
    "flashcard app",
    "study app",
    "AP Psychology",
    "SAT prep",
    "utility apps",
    "iOS apps",
  ],
  openGraph: {
    title: "Plymouth App Labs — Premium Utility iOS Apps",
    description:
      "Discover premium utility apps without monthly fees.",
    url: "https://plymouthapplabs.com",
    siteName: "Plymouth App Labs",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plymouth App Labs — Premium Utility iOS Apps",
    description:
      "Discover premium utility apps without monthly fees.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Plymouth App Labs",
              url: "https://plymouthapplabs.com",
              description:
                "Premium utility apps built for everyday life.",
            }),
          }}
        />
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
