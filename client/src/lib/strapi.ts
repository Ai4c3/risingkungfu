import { HomeResponse } from '@/types/strapi';

// URL base di Strapi (modifica se necessario)
const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

/**
 * Opzioni per le chiamate API a Strapi
 */
interface FetchStrapiOptions {
  /** Parametri di query per la richiesta */
  params?: Record<string, string>;
  /** Tempo di rivalidazione in secondi per ISR (default: 60) */
  revalidate?: number;
  /** Componenti da popolare nella risposta */
  populate?: string[];
}

/**
 * Funzione generica per chiamate API a Strapi
 * 
 * @param endpoint Endpoint API (es. '/home')
 * @param options Opzioni per la richiesta
 * @returns Risposta tipizzata da Strapi
 */
async function fetchStrapi<T>(
  endpoint: string, 
  options: FetchStrapiOptions = {}
): Promise<T> {
  // Costruisci i parametri di query
  const queryParams = new URLSearchParams();
  
  // Aggiungi parametri personalizzati
  if (options.params) {
    Object.entries(options.params).forEach(([key, value]) => {
      queryParams.append(key, value);
    });
  }
  
  // Aggiungi populate se specificato
  if (options.populate && options.populate.length > 0) {
    options.populate.forEach(item => {
      queryParams.append(`populate[${item}]`, 'true');
    });
  }
  
  // Costruisci l'URL completo
  const queryString = queryParams.toString();
  const url = `${STRAPI_URL}/api${endpoint}${queryString ? `?${queryString}` : ''}`;
  
  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      // Rivalidazione per ISR (default: 60 secondi)
      next: { revalidate: options.revalidate ?? 60 }
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

/**
 * Ottiene i dati della home page, inclusi tutti i componenti
 * 
 * @returns Dati della home page con componenti popolati
 */
export async function getHomeData(): Promise<HomeResponse> {
  return fetchStrapi<HomeResponse>('/home', {
    populate: ['blocks', 'heroImage'],
    revalidate: 60
  });
}