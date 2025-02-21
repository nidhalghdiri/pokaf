"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import clsx from "clsx";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY) {
          setIsVisible(false); // Hide on scroll down
        } else {
          setIsVisible(true); // Show on scroll up
        }
      } else {
        setIsVisible(true); // Always show when near the top
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Enma Al Dar Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav (RTL) */}
        <nav dir="rtl" className="hidden md:flex space-x-reverse space-x-6">
          {[
            { href: "/", label: "الرئيسية" },
            { href: "/about", label: "من نحن" },
            { href: "/brands", label: "علاماتنا التجارية" },
            { href: "/products", label: "منتجاتنا" },
            { href: "/contact", label: "تواصل معنا" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-black hover:text-[#bd1e2e] font-cairo font-semibold transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 bg-white">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="flex flex-col space-y-4 text-right">
                {[
                  { href: "/home", label: "الرئيسية" },
                  { href: "/about", label: "من نحن" },
                  { href: "/brands", label: "العلامات التجارية" },
                  { href: "/products", label: "المنتجات" },
                  { href: "/contact", label: "اتصل بنا" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-cairo font-medium hover:text-[#bd1e2e] transition-colors duration-300"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
