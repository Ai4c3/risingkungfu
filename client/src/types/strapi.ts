// Tipi per Strapi API
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface StrapiAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

// Tipo per il content type Home
export interface HomeAttributes extends StrapiAttributes {
  titolo: string;
  testo?: string;
}

export interface Home {
  id: number;
  attributes: HomeAttributes;
}

// Per Single Types, Strapi può restituire direttamente gli attributi
export type HomeResponse = StrapiResponse<Home> | HomeAttributes;