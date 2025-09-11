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

// Componenti riutilizzabili
export interface CloudinaryImageComponent {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
  public_id?: string;
}

// Blocchi dinamici
export interface InfoBlockComponent {
  id: number;
  __component: 'blocks.infoblock';
  title?: string;
  content?: string;
}

export interface HeroSectionComponent {
  id: number;
  __component: 'blocks.hero-section';
  title?: string;
  subtitle?: string;
  cta_text?: string;
  cta_link?: string;
}

// Tipo per i blocchi dinamici
export type DynamicBlockComponent = InfoBlockComponent | HeroSectionComponent;

// Tipo per il content type Home
export interface HomeAttributes extends StrapiAttributes {
  titolo: string;
  testo?: string;
  blocks?: DynamicBlockComponent[];
  heroImage?: {
    id: number;
    __component: 'elements.cloudinary-image';
  } & CloudinaryImageComponent;
}

export interface Home {
  id: number;
  attributes: HomeAttributes;
}

// Per Single Types, Strapi può restituire direttamente gli attributi
export type HomeResponse = StrapiResponse<Home> | HomeAttributes;