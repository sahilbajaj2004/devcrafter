"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

const FIELD =
  "w-full bg-transparent border-b border-white/20 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-indigo-500 transition-colors text-sm";
const LABEL = "block text-[10px] font-mono uppercase tracking-[0.22em] text-white/40 mb-2";

/**
 * Standalone contact form for the /contact page. Uses the same Web3Forms
 * endpoint and fields as the homepage contact section, kept separate so the
 * homepage component stays untouched.
 */
export default function ContactForm() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "ok" | "err">("idle");
  const [loading, setLoading] = useState(false);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: "feffeed8-7275-441a-a55a-b6bca2e1e324", ...form }),
      });
      const result = await res.json();
      if (result.success) {
        setStatus("ok");
        setForm({ firstName: "", lastName: "", email: "", message: "" });
      } else setStatus("err");
    } catch {
      setStatus("err");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className={LABEL}>First name</label>
          <input id="firstName" name="firstName" value={form.firstName} onChange={onChange} required className={FIELD} placeholder="Jane" />
        </div>
        <div>
          <label htmlFor="lastName" className={LABEL}>Last name</label>
          <input id="lastName" name="lastName" value={form.lastName} onChange={onChange} required className={FIELD} placeholder="Mehta" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className={LABEL}>Email</label>
        <input id="email" type="email" name="email" value={form.email} onChange={onChange} required className={FIELD} placeholder="you@company.com" />
      </div>
      <div>
        <label htmlFor="message" className={LABEL}>About the project</label>
        <textarea id="message" name="message" value={form.message} onChange={onChange} required rows={4} className={`${FIELD} resize-none`} placeholder="What are we building?" />
      </div>

      <Magnetic strength={0.3} block>
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex w-full items-center justify-center gap-2 bg-white py-5 text-[12px] font-bold uppercase tracking-[0.2em] text-black transition-colors duration-300 hover:bg-indigo-500 hover:text-white disabled:opacity-60"
        >
          {loading ? "Sending…" : "Send message"}
          {!loading && (
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          )}
        </button>
      </Magnetic>

      <p className="text-[10px] leading-relaxed text-white/30">
        By submitting, you agree to our{" "}
        <Link
          href="/privacy-policy"
          className="text-white/50 underline underline-offset-2 transition-colors hover:text-indigo-400"
        >
          Privacy Policy
        </Link>
        .
      </p>

      {status === "ok" && (
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-indigo-400">
          Got it. We&apos;ll be in touch shortly.
        </p>
      )}
      {status === "err" && (
        <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-red-400">
          Something went wrong. Please email us directly.
        </p>
      )}
    </form>
  );
}
