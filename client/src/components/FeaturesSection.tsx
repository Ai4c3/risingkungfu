import React from "react";

export interface FeaturesSectionProps {
  title: string;
  subtitle?: string;
  features: { icon: string; title: string; description: string }[];
  theme?: "light" | "dark";
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ title, subtitle, features, theme = "light" }) => {
  const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="mb-8 text-lg text-gray-500">{subtitle}</p>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="p-6 rounded-lg shadow bg-gray-50 dark:bg-gray-800">
              <div className="mb-4 text-4xl">{feature.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;