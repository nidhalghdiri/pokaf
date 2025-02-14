import type { Metadata } from "next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles/globals.css";

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
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`text-base font-marinefont`}>{children}</body>
    </html>
  );
}
