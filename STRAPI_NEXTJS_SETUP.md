# Setup Strapi + Next.js - Rising Kung Fu

## 🚀 Configurazione completata!

La homepage di Next.js è ora collegata al content type "Home" di Strapi.

## 📁 Struttura creata

### Server Strapi
```
server/src/api/home/
├── content-types/home/
│   └── schema.json          # Schema del content type
├── controllers/
│   └── home.ts             # Controller API
├── routes/
│   └── home.ts             # Routes API
└── services/
    └── home.ts             # Service layer
```

### Client Next.js
```
client/src/
├── types/
│   └── strapi.ts           # Tipi TypeScript per Strapi
├── lib/
│   └── strapi.ts           # Funzioni API per Strapi
├── components/
│   └── ErrorBoundary.tsx   # Gestione errori
└── app/
    ├── page.tsx            # Homepage collegata a Strapi
    ├── error.tsx           # Pagina di errore
    └── page.module.css     # Stili aggiornati
```

## 🔧 Come utilizzare

### 1. Avvia Strapi
```bash
cd server
npm run develop
```

### 2. Configura il content type Home
1. Vai su http://localhost:1337/admin
2. Accedi all'admin panel
3. Vai su "Content Manager" → "Single Types" → "Home Page"
4. Compila i campi:
   - **Titolo**: Il titolo principale della homepage
   - **Testo**: Il contenuto testuale (opzionale)
5. Clicca "Save" e poi "Publish"

### 3. Avvia Next.js
```bash
cd client
npm run dev
```

### 4. Visualizza il risultato
Vai su http://localhost:3000 per vedere la homepage con i contenuti di Strapi.

## 🎨 Caratteristiche

- **Server-Side Rendering**: I dati vengono caricati lato server
- **ISR (Incremental Static Regeneration)**: Cache di 60 secondi per le performance
- **Gestione errori**: Messaggi di errore chiari se Strapi non è disponibile
- **TypeScript**: Tipizzazione completa per sicurezza del codice
- **Responsive**: Design adattivo per mobile e desktop
- **Stili moderni**: Gradiente sul titolo e layout pulito

## 🔄 API Endpoint

Il content type "Home" è disponibile all'endpoint:
```
GET http://localhost:1337/api/home
```

## 🛠 Personalizzazioni

### Aggiungere nuovi campi
1. Modifica `server/src/api/home/content-types/home/schema.json`
2. Aggiorna i tipi in `client/src/types/strapi.ts`
3. Modifica `client/src/app/page.tsx` per visualizzare i nuovi campi

### Modificare gli stili
Edita `client/src/app/page.module.css` per personalizzare l'aspetto.

### Cambiare l'URL di Strapi
Modifica `client/.env.local`:
```
NEXT_PUBLIC_STRAPI_URL=http://tuo-server-strapi.com
```

## 🚨 Risoluzione problemi

- **Errore di connessione**: Verifica che Strapi sia in esecuzione su porta 1337
- **Dati non visualizzati**: Controlla che il content type "Home" sia pubblicato
- **Errori TypeScript**: Verifica che i tipi in `strapi.ts` corrispondano ai campi del content type

## 📝 Prossimi passi

1. Aggiungi altri content types (es. "About", "Services")
2. Implementa un sistema di navigazione
3. Aggiungi immagini e media
4. Configura l'autenticazione se necessaria
5. Deploy su produzione