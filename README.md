# BALEREX-site-web

Site web commercial (page d'accueil) de l'entreprise **BALEREX DIGITAL** —
transformation & communication digitale pour les PMI et PME d'Afrique de l'Ouest.

> Heritage · Innovation · Excellence

## Aperçu

Site statique **bilingue (FR / EN)**, sans dépendance ni build : il suffit
d'ouvrir `index.html`. La structure et le niveau de finition s'inspirent des
grands sites de conseil (type Capgemini), adaptés à l'identité de marque
BALEREX (marine profond + or).

- **Français** à la racine (`/index.html`, `/services.html`, …)
- **Anglais** sous `/en/` (`/en/index.html`, `/en/services.html`, …)
- Un sélecteur **FR / EN** dans la barre utilitaire relie chaque page à son équivalent.
- **Formulaire de contact fonctionnel** via [Web3Forms](https://web3forms.com)
  → les messages arrivent sur `majesticbalerexclub@gmail.com`.

### Pages (× 2 langues)
Accueil · Services (hub + 3 pôles) · Offres & Tarifs · À propos ·
Blog (index + 3 articles) · Contact · Mentions légales · Confidentialité

### Sections
- Barre utilitaire (langue, bascule thème clair/sombre)
- En-tête collant + navigation responsive
- Hero « bleed banner » avec dégradé de marque
- À ne pas manquer (cartes)
- Manifeste « Make it real »
- 3 pôles de services (communication, documentaire, collaboratif)
- Offres packagées (tarifs FCFA)
- Secteurs
- Méthode / différenciateur (bande marine, 4 garde-fous)
- Cas d'usage (slider)
- À propos
- Appel à l'action (formulaire de contact)
- Pied de page multi-colonnes

## Structure

```
index.html               Page d'accueil
styles.css               Charte graphique (marine + or, thèmes clair/sombre)
script.js                Menu mobile, thème, reveal au défilement, slider, formulaire
assets/balerex-mark.svg    Logo (le « B » couronné, recréé en SVG vectoriel)
assets/equipe-balerex.jpg  Photo d'équipe (hero) — 1536×1024, ~145 Ko
assets/conseil-data.jpg    Photo conseil/analytics (À propos) — 1536×1024, ~150 Ko
```

## Photos

Les deux photos illustrant le site sont dans `assets/` (JPG optimisés, ratio 3:2) :

| Fichier | Emplacement | Sujet |
|---|---|---|
| `assets/equipe-balerex.jpg` | Hero (accueil) | Équipe autour d'un ordinateur / tablette |
| `assets/conseil-data.jpg`   | Section « À propos » | Consultants analysant des tableaux de bord |

Pour remplacer une photo, déposez un nouveau fichier au même nom (ratio 3:2
conseillé). Si un fichier est absent, un dégradé de marque s'affiche à sa
place (« Photo à ajouter ») — la mise en page reste intacte.

## Personnalisation

Les couleurs de marque sont centralisées dans les variables CSS (`:root`)
en haut de `styles.css` — notamment `--navy-900` (marine) et `--gold-500` (or).

## Développement local

```bash
# au choix
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```
