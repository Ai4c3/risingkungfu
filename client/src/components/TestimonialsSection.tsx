import React from "react";

export interface TestimonialsSectionProps {
  title: string;
  subtitle?: string;
  testimonials: { author: string; text: string; avatar?: string }[];
  theme?: "light" | "dark";
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ title, subtitle, testimonials, theme = "light" }) => {
  const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900";
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="mb-8 text-lg text-gray-500">{subtitle}</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-6 rounded-lg shadow bg-white dark:bg-gray-800">
              {t.avatar && <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full mx-auto mb-4" />}
              <p className="italic mb-2">"{t.text}"</p>
              <div className="font-semibold">- {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;