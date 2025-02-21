"use client";

import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    { icon: <FaFacebook />, link: "#" },
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaYoutube />, link: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Company Info */}
        <div className="text-right">
          <h2 className="text-2xl font-cairo font-bold mb-4">من نحن</h2>
          <p className="text-gray-400 font-cairo leading-relaxed">
            نحن متخصصون في إنتاج رقائق البطاطس والوجبات الخفيفة عالية الجودة،
            ملتزمون بتقديم تجربة لذيذة ومستدامة لعملائنا.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="text-right">
          <h2 className="text-2xl font-cairo font-bold mb-4">روابط سريعة</h2>
          <ul className="space-y-3">
            {["الرئيسية", "منتجاتنا", "من نحن", "تواصل معنا"].map(
              (link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: -5, color: "#fff" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-gray-400 font-cairo cursor-pointer hover:text-white"
                >
                  {link}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Social Media */}
        <div className="text-right">
          <h2 className="text-2xl font-cairo font-bold mb-4">تابعنا على</h2>
          <div className="flex justify-end space-x-4">
            {socialIcons.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, color: "#fff" }}
                transition={{ type: "spring", stiffness: 300 }}
                className="text-gray-400 text-2xl cursor-pointer"
              >
                {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center font-cairo text-gray-400">
        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركتنا
      </div>
    </footer>
  );
}
