# Filtrio — site Next.js 15

Comparateur indépendant d'outils IA pour créateurs vidéo francophones.

---

## Stack

- **Next.js 15** App Router (SSG + ISR plus tard)
- **React 19**
- **TypeScript 5.7** strict
- **Tailwind CSS 3.4** (pas v4, pour stabilité)
- **PostCSS + Autoprefixer**

Pas de base de données dans cette phase : tout le contenu est typé en TS,
stocké dans `content/` et rendu côté serveur à la build.

---

## Démarrer le projet en local

```powershell
# Depuis C:\Users\FlowUP\Projects\filtrio (après avoir copié ce dossier)
pnpm.cmd install
pnpm.cmd dev
```

Le site tourne sur `http://localhost:3000`.

Autres commandes :

```powershell
pnpm.cmd build      # build de production
pnpm.cmd start      # sert le build de prod
pnpm.cmd typecheck  # vérifie le typage sans build
pnpm.cmd lint       # ESLint
```

---

## Architecture

```
filtrio/
├── app/
│   ├── layout.tsx              # layout racine + metadata globale
│   ├── globals.css             # Tailwind + custom utilities (.bar, .faq-chevron)
│   ├── page.tsx                # home
│   ├── methode/page.tsx        # page méthodologie
│   ├── not-found.tsx           # 404
│   ├── sitemap.ts              # sitemap auto depuis les registries
│   ├── robots.ts               # robots.txt
│   ├── outils/[slug]/page.tsx  # route dynamique fiches outils
│   ├── comparatifs/[slug]/page.tsx
│   └── cas-usage/[slug]/page.tsx
│
├── components/
│   ├── Nav.tsx                 # barre de navigation
│   ├── Footer.tsx              # pied de page
│   ├── Newsletter.tsx          # bloc newsletter
│   ├── ScoreRing.tsx           # cercle de score coloré
│   ├── fiche/FicheOutilLayout.tsx       # layout complet fiche outil
│   ├── comparatif/ComparatifLayout.tsx  # layout complet comparatif
│   └── cas-usage/CasUsageLayout.tsx     # layout complet cas d'usage
│
├── lib/
│   ├── outils.ts               # registre central : 16 outils (slug, score, couleur, etc.)
│   ├── comparatifs.ts          # meta des 12 comparatifs
│   └── cas-usage.ts            # meta des 6 cas d'usage
│
└── content/
    ├── outils/
    │   ├── submagic.tsx         # ✅ porté
    │   └── registry.ts          # map slug → FicheData
    ├── comparatifs/
    │   ├── opusclip-vs-submagic.tsx  # ✅ porté (session 0)
    │   └── registry.ts
    └── cas-usage/
        ├── video-longue-en-shorts.tsx  # ✅ porté (session 0)
        └── registry.ts
```

---

## Plan de migration en 5 sessions (validé 20/04/2026)

- **Session 1 ✅** : fiches prioritaires business → ElevenLabs, TubeBuddy, VidIQ, HeyGen
- **Session 2** : fiches restantes utiles → Descript, Riverside, Runway, Synthesia + Canva/CapCut/Veed/Kapwing
- **Session 3** : comparatifs prioritaires → Synthesia vs HeyGen, Veed vs Kapwing, OpusClip vs CapCut, InVideo vs Pictory, Runway vs Pika, Alternatives à Submagic
- **Session 4** : cas d'usage restants → podcast distant, sous-titres TikTok, sous-titres rapides, miniatures YouTube, Submagic ou OpusClip FR
- **Session 5** : passe globale finale → CTA, liens, cohérence, placeholders, FAQ, newsletter, éléments non branchés

---

## Où en est la migration

### Fait
- ✅ Scaffold Next.js 15 complet (configs, tsconfig, tailwind, postcss)
- ✅ Composants partagés : Nav, Footer, Newsletter, ScoreRing
- ✅ 3 layouts complets : FicheOutilLayout, ComparatifLayout, CasUsageLayout
- ✅ Registre central des 16 outils dans `lib/outils.ts`
- ✅ Registres meta : 12 comparatifs, 6 cas d'usage
- ✅ Home complète avec top 5 auto + liste comparatifs + cas d'usage
- ✅ Page méthode
- ✅ Routes dynamiques `/outils/[slug]`, `/comparatifs/[slug]`, `/cas-usage/[slug]`
- ✅ sitemap.ts automatique + robots.ts + 404 + Metadata SEO par page

### Session 1 — 5 fiches portées (20/04/2026)
- ✅ `content/outils/submagic.tsx` (témoin, score 9.2, amber)
- ✅ `content/outils/elevenlabs.tsx` (score 9.0 FR, teal, commission 22% récurrent 12 mois)
- ✅ `content/outils/tubebuddy.tsx` (score 8.6, orange, commission 50% récurrent — la plus rentable)
- ✅ `content/outils/vidiq.tsx` (score 8.0, sky)
- ✅ `content/outils/heygen.tsx` (score 8.0, cyan)

Build validé : `tsc --noEmit` passe, `next build` pré-rend 14 pages statiques.

### Reste à porter (30 pages restantes, sessions 2-4)

**11 fiches outils** :
- Session 2 prioritaire : opusclip, descript, riverside, runway, synthesia
- Session 2 complément : capcut, canva, davinci, veed, kapwing, invideo

**10 comparatifs + 1 meta-page** (pattern depuis `opusclip-vs-submagic.tsx`) :
- Session 3 : synthesia-vs-heygen, veed-vs-kapwing, opusclip-vs-capcut, invideo-vs-pictory, runway-vs-pika, alternatives-a-submagic
- Plus tard : submagic-vs-capcut, submagic-vs-descript, vidiq-vs-tubebuddy, elevenlabs-vs-heygen, descript-vs-riverside

**5 cas d'usage** (pattern depuis `video-longue-en-shorts.tsx`) :
- Session 4 : podcast-enregistrement-distant, sous-titrer-tiktok, sous-titres-rapides, miniatures-youtube-ia, submagic-ou-opusclip-shorts-fr

---

## Comment ajouter une nouvelle fiche

1. Créer `content/outils/{slug}.tsx` en clonant `submagic.tsx`
2. Remplir la structure `FicheData` avec le contenu extrait du HTML mockup
3. Ajouter dans `content/outils/registry.ts` :
   ```ts
   import { opusclipFiche } from "./opusclip";
   export const FICHE_REGISTRY: Record<string, FicheData> = {
     submagic: submagicFiche,
     opusclip: opusclipFiche, // ← nouvelle entrée
   };
   ```
4. La route `/outils/opusclip` est disponible automatiquement, la page apparaît
   dans le sitemap, et le maillage sur la home fonctionne via `ficheAvailable`.

Même pattern pour comparatifs et cas d'usage.

---

## SEO technique en place

- Metadata par page (title template, description, canonical, OpenGraph)
- Sitemap XML généré à la build depuis les registries
- Robots.txt autorisant tout sauf `/api/`
- URLs propres sans extensions (`/outils/submagic` pas `/fiche-outil-submagic.html`)
- Next.js SSG : chaque page est pré-rendue statiquement, pas de JS client requis pour afficher le contenu

**Manquant avant déploiement :**
- Variable d'env `NEXT_PUBLIC_SITE_URL` à setter au vrai domaine
- Favicon + apple-touch-icon (à ajouter dans `public/`)
- OG images statiques (pour chaque type de page, ou générées dynamiquement via `@vercel/og`)
- Script analytics (Plausible ou GA4)

---

## Déploiement Vercel (recommandé)

```bash
vercel
```

Vercel détecte automatiquement Next.js. Framework : Next.js. Build command : `pnpm build`. Output : `.next`.

Variables d'env à configurer dans Vercel :
- `NEXT_PUBLIC_SITE_URL=https://filtrio.fr` (ou ton domaine final)

---

## Points d'attention

### Classes Tailwind dynamiques

Les composants utilisent des classes comme `bg-${color}-500` où `color` est résolu à la volée depuis le registre. Pour que Tailwind ne purge pas ces classes, `tailwind.config.ts` contient une **safelist** qui inclut toutes les combinaisons couleur × échelon possibles. Si tu ajoutes une nouvelle couleur, mets à jour la safelist.

### Liens d'affiliation

Les URLs actuelles dans `lib/outils.ts` sont des placeholders `#aff-{slug}`. À remplacer par les vraies URLs de tes programmes affiliés avant le soft launch.

### Images

Aucune image n'est utilisée dans les mockups portés — tout est typographie + gradient. Quand tu ajouteras des visuels (OG images, screenshots outils), utiliser `next/image` avec `public/` ou un CDN.

---

## Licences et crédits

Contenu éditorial © Filtrio. Marques et logos des outils présentés restent propriété de leurs détenteurs respectifs.
