import { getHomeData } from '@/lib/strapi';
import ErrorMessage from '@/components/ErrorMessage';
import CloudinaryImage from '@/components/CloudinaryImage';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import GallerySection from '@/components/GallerySection';
import './components/hero-image.css';

export default async function Home() {
  let homeData = null;
  let error = null;

  try {
    const response = await getHomeData();
    
    if (response.data) {
      homeData = response.data;
    } else if (response.titolo) {
      homeData = { attributes: response };
    } else {
      homeData = response;
    }
  } catch (err) {
    error = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
    console.error('Errore nel caricamento della home:', err);
  }

  const attributes = homeData?.attributes || {};
  const { titolo, testo, heroImage, blocks = [] } = attributes;

  // Helper to render blocks based on their __component type
  const renderBlock = (block: any) => {
    switch (block.__component) {
      case 'blocks.features-section':
        return (
          <FeaturesSection
            key={block.id}
            title={block.title}
            subtitle={block.subtitle}
            features={block.features || []}
            theme={block.theme}
          />
        );
      
      case 'blocks.testimonials-section':
        return (
          <TestimonialsSection
            key={block.id}
            title={block.title}
            subtitle={block.subtitle}
            testimonials={block.testimonials || []}
            theme={block.theme}
          />
        );
      
      case 'blocks.gallery-section':
        return (
          <GallerySection
            key={block.id}
            title={block.title}
            subtitle={block.subtitle}
            images={block.images || []}
            theme={block.theme}
          />
        );
      
      case 'blocks.hero-section':
        return (
          <section key={block.id} className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
            <div className="container mx-auto px-4">
              <div className="text-center">
                {block.heading && (
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    {block.heading}
                  </h2>
                )}
                {block.cta && (
                  <a 
                    href={block.cta.url} 
                    className="inline-block bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                  >
                    {block.cta.text}
                  </a>
                )}
              </div>
            </div>
          </section>
        );
      
      case 'blocks.infoblock':
        return (
          <section key={block.id} className={`py-20 ${block.reversed ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="container mx-auto px-4">
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${block.reversed ? 'lg:flex-row-reverse' : ''}`}>
                {block.img && (
                  <div className="order-1 lg:order-1">
                    <CloudinaryImage 
                      image={block.img}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                )}
                <div className="order-2 lg:order-2">
                  {block.headline && (
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {block.headline}
                    </h3>
                  )}
                  {block.content && (
                    <div className="text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: block.content }} />
                  )}
                  {block.cta && (
                    <a 
                      href={block.cta.url} 
                      className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors"
                    >
                      {block.cta.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      
      default:
        return null;
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {error ? (
            <ErrorMessage error={error} />
          ) : homeData ? (
            <div className="hero-content">
              {heroImage && heroImage.url && (
                <div className="hero-image-container animate-fade-in">
                  <CloudinaryImage 
                    image={heroImage}
                    priority={true}
                    className="hero-image"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                </div>
              )}
              
              <h1 className="hero-title animate-slide-up">
                {titolo || 'Benvenuto in Rising Kung Fu'}
              </h1>
              
              {testo && (
                <div className="hero-text animate-slide-up">
                  {testo.split('\n').map((paragraph: string, index: number) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              
              <div className="hero-actions animate-slide-up">
                <button className="btn btn-primary btn-lg">Inizia il Percorso</button>
                <button className="btn btn-secondary btn-lg">Scopri di Più</button>
              </div>
            </div>
          ) : (
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Caricamento...</p>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic Blocks Section */}
      {blocks.length > 0 && (
        <div className="blocks-section">
          {blocks.map(renderBlock)}
        </div>
      )}

      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3 className="text-accent">Rising Kung Fu</h3>
              <p className="text-muted">L'arte marziale che trasforma corpo e mente</p>
            </div>
            <div className="footer-section">
              <p className="text-small text-muted">
                Powered by <span className="text-accent">Strapi</span> + <span className="text-accent">Next.js</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}