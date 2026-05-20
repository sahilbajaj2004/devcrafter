"use client";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "Full-stack website development, landing pages, MVPs, and cross-platform apps. We also handle deployment and CI/CD for smooth launches.",
  },
  {
    question: "Do you work with clients in Delhi and across India?",
    answer:
      "Yes. We are based in Delhi and work with startups and small businesses across India and internationally.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Landing pages start at INR 12,000, portfolios at INR 8,000, and full-stack web apps start at INR 35,000. Final pricing depends on scope.",
  },
  {
    question: "Can you build Android apps?",
    answer:
      "We build cross-platform mobile apps using React Native and responsive PWAs, which run smoothly on Android and iOS.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Landing pages usually take 1-2 weeks, while full-stack apps typically take 4-8 weeks depending on complexity.",
  },
  {
    question: "What is your process?",
    answer:
      "Discovery, design direction, build, and deployment. You work directly with the founders and get weekly updates.",
  },
];

const FaqSection = () => (
  <section id="faq" className="relative py-32 bg-black overflow-hidden noise">
    <div className="container mx-auto px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-bold mb-4">
          FAQ
        </h2>
        <h3 className="text-5xl md:text-7xl font-display font-bold text-white leading-[0.9]">
          ANSWERS <br /> <span className="text-white/20">YOU NEED.</span>
        </h3>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="border border-white/10 p-6 md:p-8 hover:bg-white/[0.03] transition-colors"
          >
            <h4 className="text-white font-display font-bold text-lg md:text-xl">
              {faq.question}
            </h4>
            <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mt-3">
              {faq.answer}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  </section>
);

export default FaqSection;
