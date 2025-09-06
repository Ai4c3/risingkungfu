'use client';

interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="error-message">
      <h1>Errore di connessione</h1>
      <p>{error}</p>
      <p>Assicurati che Strapi sia in esecuzione su http://localhost:1337</p>
      <button className="btn btn-primary mt-4" onClick={handleRetry}>
        Riprova
      </button>
    </div>
  );
}