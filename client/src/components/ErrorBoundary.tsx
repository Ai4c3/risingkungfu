'use client';

import { useEffect } from 'react';
import styles from '@/app/page.module.css';

interface ErrorBoundaryProps {
  error: Error;
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  useEffect(() => {
    console.error('Errore nell\'applicazione:', error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h1>Qualcosa è andato storto!</h1>
      <p>{error.message}</p>
      <p>Controlla che Strapi sia in esecuzione su http://localhost:1337</p>
      <button 
        onClick={reset}
        style={{
          marginTop: '1rem',
          padding: '0.5rem 1rem',
          backgroundColor: '#e74c3c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Riprova
      </button>
    </div>
  );
}