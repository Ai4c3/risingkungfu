---
description: Repository Information Overview
alwaysApply: true
---

# Repository Information Overview

## Repository Summary
Rising Kung Fu is a web application built with a modern stack consisting of a Strapi backend (server) and a Next.js frontend (client). The project follows a headless CMS architecture where Strapi provides content management and API endpoints, while Next.js handles the presentation layer with server-side rendering capabilities.

## Repository Structure
- **client/**: Next.js frontend application
- **server/**: Strapi backend application
- **DESIGN_SYSTEM.md**: Design system documentation with color palette, typography, and component guidelines
- **STRAPI_NEXTJS_SETUP.md**: Setup instructions and integration details between Strapi and Next.js

## Projects

### Client (Next.js Frontend)
**Configuration File**: client/package.json

#### Language & Runtime
**Language**: TypeScript
**Version**: Next.js 15.5.2, React 19.1.0
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- react: 19.1.0
- react-dom: 19.1.0
- next: 15.5.2

**Development Dependencies**:
- typescript: ^5
- eslint: ^9
- @types/react: ^19
- @types/react-dom: ^19

#### Build & Installation
```bash
cd client
npm install
npm run dev    # Development server
npm run build  # Production build
npm run start  # Start production server
```

#### Main Files & Resources
- **src/app/page.tsx**: Main entry point for the homepage
- **src/lib/strapi.ts**: API functions for Strapi integration
- **src/types/strapi.ts**: TypeScript types for Strapi data
- **next.config.ts**: Next.js configuration with image domains and CORS settings
- **.env.local**: Environment configuration with Strapi URL

### Server (Strapi Backend)
**Configuration File**: server/package.json

#### Language & Runtime
**Language**: TypeScript
**Version**: Node.js >=18.0.0 <=22.x.x
**Framework**: Strapi 5.23.3
**Package Manager**: npm

#### Dependencies
**Main Dependencies**:
- @strapi/strapi: 5.23.3
- @strapi/plugin-users-permissions: 5.23.3
- @strapi/plugin-cloud: 5.23.3
- @strapi/provider-upload-cloudinary: ^5.23.3
- better-sqlite3: 11.3.0

**Development Dependencies**:
- typescript: ^5
- @types/node: ^20
- @types/react: ^18
- @types/react-dom: ^18

#### Build & Installation
```bash
cd server
npm install
npm run develop  # Development server
npm run build    # Production build
npm run start    # Start production server
```

#### Database
**Default Database**: SQLite
**Configuration**: server/config/database.ts
**Supported Databases**: SQLite, MySQL, PostgreSQL
**Connection File**: .tmp/data.db (default SQLite location)

#### Main Files & Resources
- **src/api/**: API endpoints and content types
- **src/index.ts**: Main entry point
- **config/**: Configuration files for database, server, and plugins
- **.env**: Environment variables (from .env.example template)

## Integration
The client and server communicate via RESTful API endpoints. The client fetches data from Strapi using the following pattern:
- API Base URL: http://localhost:1337/api
- Content Types: Accessible via endpoints like /api/home

The integration supports:
- Server-Side Rendering (SSR)
- Incremental Static Regeneration (ISR) with 60-second cache
- TypeScript interfaces for type safety