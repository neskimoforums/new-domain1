"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name is too short" }), 
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject is too short" }),
  message: z.string().min(10, { message: "Message is too short" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const router = useRouter(); 

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("submitting");

    try {
      // Sending data to our internal Next.js API route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("success");
        reset();
        setTimeout(() => {
          router.push("/"); 
        }, 1500);
      } else {
        setStatus("error");
      }
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Get in Touch</h2>
          <p className="text-gray-600">We&apos;d love to hear from you. Send us a message!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input
              {...register("name")}
              type="text"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 outline-none ${errors.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              {...register("email")}
              type="email"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 outline-none ${errors.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
            <input
              {...register("subject")}
              type="text"
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 outline-none ${errors.subject ? "border-red-500" : "border-gray-300"}`}
              placeholder="How can we help?"
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea
              {...register("message")}
              rows={5}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 transition duration-200 outline-none resize-none ${errors.message ? "border-red-500" : "border-gray-300"}`}
              placeholder="Tell us what's on your mind..."
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg animate-pulse">
              Message sent successfully! Redirecting...
            </div>
          )}

          {status === "error" && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
              Something went wrong. Please check your SMTP settings.
            </div>
          )}
        </form>
      </div>
    </div>
  </div>
  );
}