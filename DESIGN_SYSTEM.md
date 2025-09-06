# 🎨 Design System - Rising Kung Fu

## 📋 Panoramica

Sistema di design completo per Rising Kung Fu basato su principi di design moderni e accessibilità. Utilizza CSS custom properties per una gestione centralizzata dei token di design.

## 🎯 Colori

### Palette Principale
```css
--color-primary-red: #B11226      /* Rosso principale */
--color-primary-red-dark: #8B0E1F /* Rosso scuro */
--color-primary-red-light: #D4142E /* Rosso chiaro */

--color-accent-gold: #D4AF37      /* Oro principale */
--color-accent-gold-dark: #CFA830 /* Oro scuro */
--color-accent-gold-light: #E6C547 /* Oro chiaro */
```

### Colori di Background
```css
--color-dark-bg: #111217          /* Background scuro */
--color-bg: #FFFFFF               /* Background principale */
--color-bg-secondary: #F8F9FA     /* Background secondario */
--color-bg-tertiary: #F1F3F4      /* Background terziario */
```

### Colori del Testo
```css
--color-text: #1A1A1A             /* Testo principale */
--color-text-secondary: #4A4A4A   /* Testo secondario */
--color-text-muted: #6B7280       /* Testo attenuato */
--color-text-light: #9CA3AF       /* Testo chiaro */
--color-text-white: #FFFFFF       /* Testo bianco */
```

## ✍️ Tipografia

### Font Stack
```css
--font-heading: "Marcellus", "Playfair Display", serif;
--font-body: "Work Sans", "Inter", sans-serif;
--font-accent: "Satisfy", "Great Vibes", cursive;
```

### Scala Tipografica

| Elemento | Desktop | Tablet | Mobile | Line Height | Weight | Font |
|----------|---------|--------|--------|-------------|--------|------|
| H1 | 48px | 40px | 32px | 1.08 | 400 | Marcellus |
| H2 | 32px | 28px | 24px | 1.2 | 400 | Marcellus |
| H3 | 24px | 20px | 18px | 1.25 | 600 | Work Sans |
| H4 | 18px | 16px | 16px | 1.3 | 600 | Work Sans |
| Body | 16px | 16px | 16px | 1.6 | 400 | Work Sans |
| Small | 14px | 14px | 14px | 1.4 | 400 | Work Sans |

### Utilizzo
```html
<h1>Titolo Principale</h1>
<h2>Sottotitolo</h2>
<h3>Sezione</h3>
<p>Testo del corpo</p>
<p class="text-small">Testo piccolo</p>
<span class="text-accent">Testo decorativo</span>
```

## 📏 Spaziatura

### Scala di Spaziatura (base 8px)
```css
--space-1: 4px    /* 0.25rem */
--space-2: 8px    /* 0.5rem */
--space-3: 16px   /* 1rem */
--space-4: 24px   /* 1.5rem */
--space-5: 32px   /* 2rem */
--space-6: 48px   /* 3rem */
--space-7: 64px   /* 4rem */
--space-8: 96px   /* 6rem */
--space-9: 128px  /* 8rem */
```

### Classi Utility
```html
<!-- Margin -->
<div class="m-3">Margin 16px</div>
<div class="mt-4">Margin top 24px</div>
<div class="mb-5">Margin bottom 32px</div>

<!-- Padding -->
<div class="p-4">Padding 24px</div>
```

## 🔘 Sistema di Bottoni

### Varianti
```html
<!-- Primary (Gold) -->
<button class="btn btn-primary">Azione Principale</button>

<!-- Secondary (Outline Gold) -->
<button class="btn btn-secondary">Azione Secondaria</button>

<!-- Tertiary (Ghost/Link) -->
<button class="btn btn-tertiary">Link</button>

<!-- Danger (Red) -->
<button class="btn btn-danger">Elimina</button>
```

### Dimensioni
```html
<button class="btn btn-primary btn-sm">Piccolo</button>
<button class="btn btn-primary">Normale</button>
<button class="btn btn-primary btn-lg">Grande</button>
```

## 🃏 Sistema di Card

### Card Base
```html
<div class="card">
  <img src="image.jpg" alt="Descrizione" class="card-image">
  <div class="card-body">
    <h3>Titolo Card</h3>
    <p>Contenuto della card...</p>
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Azione</button>
  </div>
</div>
```

## 📝 Sistema di Form

### Elementi Base
```html
<div class="form-group">
  <label class="form-label" for="email">Email</label>
  <input type="email" id="email" class="form-input" placeholder="tua@email.com">
</div>

<div class="form-group">
  <label class="form-label" for="message">Messaggio</label>
  <textarea id="message" class="form-textarea" placeholder="Il tuo messaggio..."></textarea>
</div>

<button type="submit" class="btn btn-primary">Invia</button>
```

## 🏷️ Badge e Alert

### Badge
```html
<span class="badge badge-primary">Nuovo</span>
<span class="badge badge-accent">Premium</span>
<span class="badge badge-success">Completato</span>
```

### Alert
```html
<div class="alert alert-info">Informazione importante</div>
<div class="alert alert-success">Operazione completata</div>
<div class="alert alert-warning">Attenzione richiesta</div>
<div class="alert alert-error">Errore verificato</div>
```

## 📱 Layout Responsive

### Container
```html
<div class="container">
  <!-- Contenuto centrato con max-width 1200px -->
</div>
```

### Grid System
```html
<div class="grid">
  <!-- Grid a 12 colonne con gap 24px -->
</div>
```

### Breakpoint
- **Desktop**: > 768px
- **Tablet**: 481px - 768px  
- **Mobile**: ≤ 480px

## 🎭 Animazioni

### Classi Predefinite
```html
<div class="animate-fade-in">Fade in</div>
<div class="animate-slide-up">Slide up</div>
```

### Transizioni
```css
--transition-fast: 150ms ease;
--transition-normal: 250ms ease;
--transition-slow: 350ms ease;
```

## 🎨 Componenti Specifici

### Hero Section
```html
<section class="hero-section">
  <div class="container">
    <div class="hero-content">
      <h1 class="hero-title">Titolo Hero</h1>
      <div class="hero-text">
        <p>Testo descrittivo...</p>
      </div>
      <div class="hero-actions">
        <button class="btn btn-primary btn-lg">CTA Principale</button>
        <button class="btn btn-secondary btn-lg">CTA Secondaria</button>
      </div>
    </div>
  </div>
</section>
```

### Header/Navigation
```html
<header class="site-header">
  <div class="container">
    <div class="header-content">
      <a href="/" class="site-logo">Rising Kung Fu</a>
      <nav class="main-nav">
        <a href="/corsi" class="nav-link">Corsi</a>
        <a href="/maestri" class="nav-link">Maestri</a>
        <a href="/contatti" class="nav-link">Contatti</a>
        <button class="btn btn-primary">Iscriviti</button>
      </nav>
    </div>
  </div>
</header>
```

### Footer
```html
<footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-section">
        <h3 class="text-accent">Rising Kung Fu</h3>
        <p class="text-muted">L'arte marziale che trasforma corpo e mente</p>
      </div>
      <div class="footer-section">
        <p class="text-small text-muted">© 2024 Rising Kung Fu</p>
      </div>
    </div>
  </div>
</footer>
```

## 🔧 Utility Classes

### Testo
```html
<p class="text-center">Centrato</p>
<p class="text-primary">Rosso</p>
<p class="text-accent">Oro</p>
<p class="text-muted">Attenuato</p>
```

### Background
```html
<div class="bg-primary">Background rosso</div>
<div class="bg-accent">Background oro</div>
<div class="bg-dark">Background scuro</div>
```

### Border Radius
```html
<div class="rounded-sm">Bordi piccoli</div>
<div class="rounded-md">Bordi medi</div>
<div class="rounded-lg">Bordi grandi</div>
<div class="rounded-full">Bordi circolari</div>
```

### Shadow
```html
<div class="shadow-soft">Ombra morbida</div>
<div class="shadow-elevated">Ombra elevata</div>
```

## ♿ Accessibilità

- **Focus visibile**: Outline oro su tutti gli elementi interattivi
- **Contrasto**: Tutti i colori rispettano WCAG 2.1 AA
- **Screen reader**: Classe `.sr-only` per contenuto nascosto visivamente
- **Semantic HTML**: Utilizzo di elementi semantici appropriati

## 📚 Best Practices

1. **Usa sempre le custom properties** invece di valori hardcoded
2. **Mantieni la consistenza** utilizzando le classi predefinite
3. **Testa su tutti i breakpoint** per garantire la responsività
4. **Verifica l'accessibilità** con strumenti come axe-core
5. **Documenta le modifiche** al sistema di design

## 🚀 Esempi di Utilizzo

### Pagina Corso
```html
<div class="container">
  <div class="card">
    <img src="corso.jpg" alt="Corso Kung Fu" class="card-image">
    <div class="card-body">
      <div class="flex justify-between items-center mb-3">
        <span class="badge badge-accent">Premium</span>
        <span class="text-accent">€99</span>
      </div>
      <h3>Kung Fu Tradizionale</h3>
      <p class="text-muted">Impara le basi del Kung Fu tradizionale...</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-primary">Iscriviti Ora</button>
    </div>
  </div>
</div>
```

Questo sistema di design fornisce una base solida e scalabile per tutto il sito Rising Kung Fu! 🥋