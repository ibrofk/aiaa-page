# Translation Guide

This document explains how to manage translations for the Futuristic landing page components. The translation system uses a JSON structure with nested keys for organization.

## File Structure
```
public/
  locales/
    en/
      common.json
    es/
      common.json
src/
  components/
    ChatSupport.tsx
    blocks/
      journey-map.jsx
```

## 1. JSON Structure Overview
Our main translation file `common.json` contains these main sections:

```json
{
  "loading": {},
  "hero": {},
  "videoSection": {},
  "valueProposition": {},
  "services": {},
  "ctaSection": {},
  "contact": {},
  "chatSupport": {},
  "journeyMap": {}
}
```

## 2. Implementation Basics

First install required dependencies:
```bash
npm install i18next react-i18next
```

Initialize the translation system:
```jsx
// src/lib/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from '../../public/locales/en/common.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
```

## 3. Component Integration Examples

### Hero Section
```jsx
// Before
<WordRotate
  words={["Transform", "Automate", "Scale"]}
/>

// After (using translations)
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<WordRotate
  words={t('hero.rotatingWords', { returnObjects: true })}
/>
```

### Services Section
```jsx
// Before
<h2 className="text-4xl font-bold text-white mb-6">
  Our Services
</h2>

// After
<h2 className="text-4xl font-bold text-white mb-6">
  {t('services.title')}
</h2>
```

### Chat Support
```jsx
// Before
<h1 className="text-xl font-semibold">Chat with our AI ✨</h1>

// After
<h1 className="text-xl font-semibold">
  {t('chatSupport.header')}
</h1>
```

## 4. Special Cases

### Emphasized Keywords (JourneyMap)
```json
{
  "journeyMap": {
    "timeline": [
      {
        "title": "The Struggle",
        "content": "Running a business is <em>rewarding</em>..."
      }
    ]
  }
}
```

Implementation:
```jsx
// In journey-map.jsx
const content = t(`journeyMap.timeline.${index}.content`);

<div dangerouslySetInnerHTML={{
  __html: content.replace(/<em>(.*?)<\/em>/g, (_, term) => 
    `<KeyWord>${term}</KeyWord>`
  )
}} />
```

### Dynamic Values
For values needing interpolation:
```json
{
  "valueProposition": {
    "cards": [
      {
        "mobileDescription": "40% faster with AI-powered automation"
      }
    ]
  }
}
```

```jsx
// In component
<p>{t('valueProposition.cards.0.mobileDescription')}</p>
```

## 5. Full Replacement Guide

| Component Section       | JSON Path                          | Example Value                          |
|-------------------------|------------------------------------|----------------------------------------|
| Loading message         | `loading.message`                  | "Loading resources..."                 |
| Hero CTA Button         | `hero.ctaButton`                   | "Book a Call"                          |
| Video Section Title     | `videoSection.title`               | "See How We Transformed..."            |
| Service Items           | `services.items[0].description`    | "Intelligent automation that..."       |
| Chat Initial Message    | `chatSupport.initialMessage`       | "Hello! How can I assist..."           |
| Journey Map Content     | `journeyMap.timeline[0].content`   | "Running a business is <em>..."        |

## 6. Best Practices

1. **HTML Tags**: Preserve `<em>` tags for emphasized keywords
2. **Plurals**: Use i18next pluralization:
   ```json
   {
     "messages": {
       "count": "You have {{count}} message"
     }
   }
   ```
3. **Dynamic Keys**: For array items, use index-based keys:
   ```jsx
   t(`services.items.${index}.title`)
   ```
4. **Context Comments**: Add comments for translators:
   ```json
   {
     // Header for chat widget
     "header": "Chat with our AI ✨"
   }
   ```

## 7. Creating New Translations

1. Duplicate `en.json` to new language code (e.g., `es.json`)
2. Replace all string values with translations
3. Update i18n initialization:
   ```jsx
   resources: {
     en: { translation: enTranslations },
     es: { translation: esTranslations }
   }
   ```
4. Implement language switcher component
