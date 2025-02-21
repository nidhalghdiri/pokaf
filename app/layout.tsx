import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/globals.css";
import { Cairo } from "next/font/google";

const cairo = Cairo({
  subsets: ["latin"], // Specify the subsets you need
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"], // Specify the weights you need
  variable: "--font-cairo", // Optional: Define a CSS variable
});

export const metadata: Metadata = {
  title: "Enma Al Dar Industries LLC",
  description: "Leading manufacturer of chip products with 3 trusted brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
