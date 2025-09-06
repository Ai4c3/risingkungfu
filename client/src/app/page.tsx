import { getHomeData } from '@/lib/strapi';
import ErrorMessage from '@/components/ErrorMessage';

export default async function Home() {
  let homeData = null;
  let error = null;

  try {
    const response = await getHomeData();
    
    // Per Single Types, Strapi può restituire la struttura in modi diversi
    if (response.data) {
      // Struttura standard: { data: { id, attributes: {...} } }
      homeData = response.data;
    } else if (response.titolo) {
      // Struttura diretta: { titolo, testo, createdAt, ... }
      homeData = { attributes: response };
    } else {
      // Fallback: usa la risposta così com'è
      homeData = response;
    }
  } catch (err) {
    error = err instanceof Error ? err.message : 'Errore nel caricamento dei dati';
    console.error('Errore nel caricamento della home:', err);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          {error ? (
            <ErrorMessage error={error} />
          ) : homeData ? (
            <div className="hero-content">
              <h1 className="hero-title animate-slide-up">
                {homeData.attributes?.titolo || homeData.titolo || 'Benvenuto in Rising Kung Fu'}
              </h1>
              {(homeData.attributes?.testo || homeData.testo) && (
                <div className="hero-text animate-slide-up">
                  {(homeData.attributes?.testo || homeData.testo).split('\n').map((paragraph: string, index: number) => (
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
