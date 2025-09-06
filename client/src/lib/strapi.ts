import { HomeResponse } from '@/types/strapi';

// URL base di Strapi (modifica se necessario)
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

// Funzione generica per chiamate API a Strapi
async function fetchStrapi<T>(endpoint: string): Promise<T> {
  const url = `${STRAPI_URL}/api${endpoint}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Rivalidazione ogni 60 secondi per ISR
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`Errore API Strapi: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Errore nella chiamata a Strapi:', error);
    throw error;
  }
}

// Funzione specifica per ottenere i dati della home
export async function getHomeData(): Promise<any> {
  return fetchStrapi<any>('/home');
}