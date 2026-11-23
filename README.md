# Portfolio — Elie Sanon, AI Engineer

Site vitrine : Next.js 16 (App Router), TypeScript, Motion, Three.js, CMS Sanity pour les études de cas.

- `app/(home)` : page d'accueil (design Alteca, effets 3D).
- `app/(cases)` : études de cas (`/experience/*`), recherche (`/research/*`) et studio Sanity (`/studio`), avec leur propre mise en page.

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # build de production
```

## Modifier le contenu

Tous les textes de l'accueil sont dans **`content/site.ts`** : accroche, projets, expériences, formation, contact, nuage de compétences.
Les schémas (pipelines et architectures) sont dans `content/diagrams.ts`.

| Pour… | Fichier |
|---|---|
| Textes, liens, projets, expériences | `content/site.ts` |
| Schémas SVG | `content/diagrams.ts` |
| Styles (couleurs, espacements, effets) | `app/(home)/globals.css` (variables en haut du fichier) |
| Scène 3D du haut de page | `components/HeroScene.tsx` |
| Images | `public/img/` |
| Logos des technos (Simple Icons, CC0) | `public/icons.svg` |

## Avant la mise en ligne

1. **CV** : copier le PDF dans `public/cv_elie_sanon.pdf` (tous les liens « CV » pointent vers `/cv_elie_sanon.pdf`).
2. **Dépôts GitHub** : remplacer les deux `repoUrl` marqués `TODO` dans `content/site.ts`.
3. **Page Recherche** : le lien « Lire les études » pointe vers l'ancien site (`eliesanon.vercel.app/research`) ; à mettre à jour si cette page disparaît.

## Déployer sur Vercel

1. Pousser ce dossier sur un dépôt GitHub.
2. Sur vercel.com : **Add New → Project**, importer le dépôt, garder les réglages détectés (Next.js), **Deploy**.
3. Pour remplacer l'ancien site sur la même adresse : dans le projet Vercel existant, **Settings → Git**, connecter ce nouveau dépôt (ou pousser ce code dans l'ancien dépôt).

## Choix techniques

- **Polices auto-hébergées** (Montserrat pour les titres, DM Sans pour le texte, via `next/font/local`) : aucun appel à Google Fonts, donc plus rapide et sans transfert de données.
- **Three.js chargé à la demande** : la page s'affiche d'abord, la scène 3D arrive ensuite. Elle se met en pause hors écran, s'affiche fixe si le visiteur demande moins d'animations, et laisse l'image de repli sur mobile ou sans WebGL.
- **Accessibilité** : navigation au clavier avec contour de focus visible, bandeau défilant avec bouton pause, emojis masqués aux lecteurs d'écran, contrastes vérifiés.
- **Contenu centralisé** dans `site.ts`, structuré pour ajouter une version anglaise (`en`) plus tard.
