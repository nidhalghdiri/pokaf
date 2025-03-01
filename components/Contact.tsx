"use client";

import { motion } from "framer-motion";

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold font-cairo text-primary text-center mb-12">
          تواصل معنا
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-cairo font-medium text-gray-700"
                >
                  الاسم
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border font-cairo border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-cairo font-medium text-gray-700"
                >
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 font-cairo border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-cairo font-medium text-gray-700"
                >
                  الرسالة
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border font-cairo border-gray-300 rounded-lg"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#bd1e2e] text-white px-6 py-3 font-cairo rounded-lg hover:bg-secondary transition-all"
                >
                  إرسال
                </button>
              </div>
            </form>
          </div>

          {/* Company Details and Map */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-primary font-cairo mb-4">
                معلومات التواصل
              </h3>
              <div className="space-y-4 text-gray-700 font-cairo">
                <p>
                  <strong>العنوان:</strong> صلالة، سلطنة عمان
                </p>
                <p>
                  <strong>الهاتف:</strong> +968 1234 5678
                </p>
                <p>
                  <strong>البريد الإلكتروني:</strong> info@example.com
                </p>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3816.2345966157377!2d53.9856611!3d16.963006999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd16740a7ad0e69%3A0x1a834a0438e1bd28!2sEnma%20Al%20Dar!5e0!3m2!1sfr!2som!4v1740763684708!5m2!1sfr!2som"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
