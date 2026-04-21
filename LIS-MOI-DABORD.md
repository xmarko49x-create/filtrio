# IAcréa — Le site Next.js complet (35 pages)

**Ce dossier contient tout.** Scaffold Next.js 15 + 35 pages prêtes à tourner.

Sessions 0 à 4 terminées. Session 5 (polish) partiellement faite.

---

## Comment lancer le site en local

```powershell
# 1. Copier ce dossier vers Projects
Copy-Item -Recurse "C:\Users\FlowUP\Videos\roblox\dino\VOITURE\IACREA-SITE-COMPLET" "C:\Users\FlowUP\Projects\iacrea"
cd C:\Users\FlowUP\Projects\iacrea

# 2. Installer (première fois, 1-2 min)
pnpm.cmd install

# 3. Lancer
pnpm.cmd dev
```

Puis ouvrir `http://localhost:3000`.

Si tu avais déjà copié une version plus ancienne dans `Projects\iacrea`, supprime-la d'abord ou utilise `iacrea-v2`.

---

## Les 35 URLs du site

### Pages statiques (5)
- `/` — home avec top 5 outils, comparatifs, cas d'usage
- `/youtube` — outils + comparatifs + cas d'usage pour YouTube
- `/tiktok-shorts` — outils + comparatifs + cas d'usage pour TikTok/Shorts
- `/methode` — scoring éditorial 6 critères
- `/_not-found` — 404

### Fiches outils (13)
- `/outils/submagic` (9.2, amber)
- `/outils/elevenlabs` (9.0 FR, teal)
- `/outils/tubebuddy` (8.6, orange)
- `/outils/canva` (8.5, pink)
- `/outils/runway` (8.5, purple)
- `/outils/descript` (8.4, violet)
- `/outils/synthesia` (8.2, blue)
- `/outils/riverside` (8.1, indigo)
- `/outils/vidiq` (8.0, sky)
- `/outils/heygen` (8.0, cyan)
- `/outils/capcut` (7.8, sky)
- `/outils/veed` (7.8, yellow)
- `/outils/kapwing` (7.2, green)

3 fiches gardées en "à venir" (pour plus tard) : OpusClip, DaVinci, InVideo

### Comparatifs (6 + 1 meta-page)
- `/comparatifs/opusclip-vs-submagic` — le vrai duel shorts
- `/comparatifs/synthesia-vs-heygen` — avatars IA B2B vs créateur
- `/comparatifs/veed-vs-kapwing` — éditeur solo vs équipe
- `/comparatifs/opusclip-vs-capcut` — découpe auto vs éditeur gratuit
- `/comparatifs/invideo-vs-pictory` — script-to-video vs article-to-video
- `/comparatifs/runway-vs-pika` — génération vidéo IA pro vs accessible
- `/comparatifs/alternatives-a-submagic` — meta-page avec 5 alternatives

### Cas d'usage (6)
- `/cas-usage/video-longue-en-shorts` — OpusClip gagnant
- `/cas-usage/sous-titrer-tiktok` — Submagic gagnant
- `/cas-usage/submagic-ou-opusclip-shorts-fr` — choix guidé 4 questions
- `/cas-usage/sous-titres-rapides` — Submagic gagnant vitesse
- `/cas-usage/miniatures-youtube-ia` — Canva gagnant
- `/cas-usage/podcast-enregistrement-distant` — Riverside gagnant

### SEO
- `/sitemap.xml` — inclut les 35 pages
- `/robots.txt`

---

## Structure du projet

```
IACREA-SITE-COMPLET/
├── app/                    # Routes Next.js
├── components/             # Composants React réutilisables
├── lib/                    # Registries (outils, comparatifs, cas-usage)
└── content/                # Contenu éditorial typé par page
```

---

## Ce qu'il reste à faire avant soft launch

- Définir `NEXT_PUBLIC_SITE_URL` dans `.env.local` avec le vrai domaine
- Ajouter favicon + OG image dans `public/`
- Remplacer les liens affiliés placeholder `#aff-{slug}` dans `lib/outils.ts`
- Script analytics (Plausible recommandé)
- 3 fiches optionnelles : OpusClip, DaVinci, InVideo
- 5 comparatifs bonus (Submagic vs CapCut, Submagic vs Descript, VidIQ vs TubeBuddy, ElevenLabs vs HeyGen, Descript vs Riverside) — les HTML existent déjà dans VOITURE comme référence
- Déployer sur Vercel
- Soumettre sitemap à Google Search Console

---

## Commandes utiles

```powershell
pnpm.cmd dev        # Serveur dev sur :3000
pnpm.cmd build      # Build de prod
pnpm.cmd start      # Sert le build de prod
pnpm.cmd typecheck  # Typage sans compiler
```

## Pour arrêter le serveur

`Ctrl+C` dans la fenêtre PowerShell.

## Pour relancer

```powershell
cd C:\Users\FlowUP\Projects\iacrea
pnpm.cmd dev
```
