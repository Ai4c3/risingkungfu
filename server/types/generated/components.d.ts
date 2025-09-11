import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    img: Schema.Attribute.Component<'elements.cloudinary-image', false>;
    logo: Schema.Attribute.Component<'elements.cloudinary-image', false>;
    theme: Schema.Attribute.Enumeration<['gold', 'ghost']>;
  };
}

export interface BlocksInfoblock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_infoblocks';
  info: {
    displayName: 'infoblock';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    headline: Schema.Attribute.String;
    img: Schema.Attribute.Component<'elements.cloudinary-image', false>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    theme: Schema.Attribute.Enumeration<['gold', 'ghost']>;
  };
}

export interface ElementsCloudinaryImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_cloudinary_images';
  info: {
    description: 'Gestione immagini Cloudinary tramite URL';
    displayName: 'Cloudinary Image';
    icon: 'image';
  };
  attributes: {
    alt: Schema.Attribute.String;
    height: Schema.Attribute.Integer;
    public_id: Schema.Attribute.String;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    width: Schema.Attribute.Integer;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.hero-section': BlocksHeroSection;
      'blocks.infoblock': BlocksInfoblock;
      'elements.cloudinary-image': ElementsCloudinaryImage;
      'elements.link': ElementsLink;
      'elements.logo': ElementsLogo;
    }
  }
}
