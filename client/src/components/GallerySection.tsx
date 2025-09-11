import React from "react";

export interface GallerySectionProps {
  title: string;
  images: { src: string; alt?: string }[];
  theme?: "light" | "dark";
}

const GallerySection: React.FC<GallerySectionProps> = ({ title, images, theme = "light" }) => {
  const bgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  return (
    <section className={`py-16 px-4 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <img key={idx} src={img.src} alt={img.alt || ""} className="rounded shadow" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;