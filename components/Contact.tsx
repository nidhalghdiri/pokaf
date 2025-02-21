"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Section Title */}
        <motion.h2
          className="text-3xl font-cairo font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          تواصل معنا
        </motion.h2>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 bg-white p-8 shadow-lg rounded-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Name Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="الاسم الكامل"
              className="w-full border border-gray-300 rounded-lg p-3 font-cairo text-right text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bd1e2e]/40 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="البريد الإلكتروني"
              className="w-full border border-gray-300 rounded-lg p-3 font-cairo text-right text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bd1e2e]/40 focus:border-transparent"
            />
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              placeholder="اكتب رسالتك هنا"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-3 font-cairo text-right text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#bd1e2e]/40 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-[#bd1e2e] text-white py-3 rounded-lg font-cairo font-bold text-lg hover:bg-[#bd1e2e] focus:outline-none focus:ring-2 focus:ring-[#bd1e2e]/40 focus:ring-opacity-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            إرسال الرسالة
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="mt-10 text-center font-cairo text-gray-600"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>أو يمكنك التواصل معنا عبر البريد الإلكتروني:</p>
          <a
            href="mailto:info@example.com"
            className="text-[#bd1e2e] font-cairo font-semibold"
          >
            info@example.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
