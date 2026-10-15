# Portfolio Professionnel — MBIAMY NGAMENI Steven Loic

> **Ingénieur de Conception en Génie Informatique**  
> Diplômé de l'**École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)** — Promotion 2026, *Mention Excellente*.  
> Spécialités : Architecture Logicielle · Systèmes Distribués · Développement Full-Stack · Systèmes de Streaming Vocal Temps Réel · Ingénierie IA · DevOps · Cybersécurité.

---

## 📋 Table des Matières

1. [Présentation du Portfolio](#-présentation-du-portfolio)
2. [Projets Phares Intégrés](#-projets-phares-intégrés)
3. [Guide de Configuration & Personnalisation](#-guide-de-configuration--personnalisation)
   - [1. Ajouter votre Photo de Profil](#1-ajouter-votre-photo-de-profil-portrait)
   - [2. Ajouter votre Fichier CV (PDF)](#2-ajouter-votre-fichier-cv-pdf)
   - [3. Mettre à jour vos Coordonnées & Réseaux](#3-mettre-à-jour-vos-coordonnées--réseaux)
   - [4. Ajouter ou Modifier des Projets](#4-ajouter-ou-modifier-des-projets)
   - [5. Logo Officiel ENSPY](#5-logo-officiel-enspy)
4. [Stack Technique & Architecture du Frontend](#-stack-technique--architecture-du-frontend)
5. [Arborescence du Projet](#-arborescence-du-projet)
6. [Commandes de Développement & Déploiement](#-commandes-de-développement--déploiement)

---

## 🌟 Présentation du Portfolio

Ce portfolio a été conçu selon les standards les plus exigeants de l'ingénierie logicielle pour mettre en valeur les réalisations concrètes de **Steven Loïc MBIAMY** :

- **Bilingue Temps Réel (FR / EN)** avec persistance locale du choix de langue.
- **Démonstrateur d'Architecture Interactif** : Schéma d'ingénierie temps réel pas-à-pas avec inspection des étapes de pipeline (Microphone -> WebSocket Gateway -> VAD -> ASR faster-whisper -> LLM Engine -> Semantic Chunker -> TTS Engine -> Playback).
- **Modales d'Études de Cas Détaillées** : Analyse approfondie des défis, topologies, stacks et résultats métriques de chaque projet.
- **Export vCard (.vcf) en 1 clic** : Ajout direct des coordonnées de Steven dans les répertoires téléphoniques.
- **Design Institutionnel Sombre & Élégant** avec le sceau officiel de l'ENSPY intégré harmonieusement.
- **Interface 100% Recruteur & Client** : Zéro texte d'instruction de développement dans l'interface visuelle.

---

## 🚀 Projets Phares Intégrés

### 1. AGT-Voice — Streaming Vocal Bidirectionnel Temps Réel
- **Description** : Système d'orchestration vocale ultra-basse latence interconnectant VAD, reconnaissance automatique de la parole (faster-whisper), LLMs (Groq cloud & Ollama local) et synthèse vocale en continu via WebSockets asynchrones Python.
- **Lien de démonstration** : [https://agt-voice.ag-technologies.tech](https://agt-voice.ag-technologies.tech)
- **Contexte** : Projet d'ingénierie soutenu avec mention excellente à l'ENSPY.

### 2. Portail Synthèse Microservices VTC (Projet Niveau 5 ENSPY)
- **Description** : Architecture microservices complète pour une plateforme de VTC (Véhicule de Transport avec Chauffeur) couvrant la réservation, le calcul dynamique d'itinéraires et de tarifs, la géolocalisation en temps réel et la gestion des courses.
- **Lien direct** : [https://site-portail-synthese.vercel.app/](https://site-portail-synthese.vercel.app/)

### 3. Fare Calculator — Machine Learning & Tarification Prédictive
- **Description** : Application de bout en bout couvrant la récolte et le nettoyage des données, l'entraînement de modèles prédictifs de régression pour l'estimation tarifaire, et le déploiement d'un frontend interactif intuitif.
- **Lien direct** : [https://fare-calculator-front.vercel.app/en](https://fare-calculator-front.vercel.app/en)

### 4. AGT-Bot — Plateforme en Production
- **Description** : Plateforme conversationnelle et IA déployée en production 24/7.
- **Lien direct** : [https://agt-bot.com](https://agt-bot.com)

---

## ⚙️ Guide de Configuration & Personnalisation

Toutes les données du portfolio sont centralisées dans un seul fichier : **`lib/portfolio-data.ts`**.

### 1. Ajouter votre Photo de Profil (Portrait)

Par défaut, un badge d'ingénieur élégant avec le sceau ENSPY est affiché. Pour afficher votre vraie photo :

1. Déposez votre fichier image (ex. `steven-loic.jpg`) dans le dossier **`public/`** :
   ```bash
   public/steven-loic.jpg
   ```
2. Ouvrez le fichier **`lib/portfolio-data.ts`**.
3. Dans la section `PORTFOLIO_CONFIG.personal`, modifiez la ligne `avatarUrl` :
   ```typescript
   export const PORTFOLIO_CONFIG = {
     personal: {
       fullName: "MBIAMY NGAMENI Steven Loic",
       // Remplacez null par le chemin de votre photo :
       avatarUrl: "/steven-loic.jpg",
       // ...
     }
   }
   ```
4. Sauvegardez : votre photo apparaîtra instantanément dans le cadre portrait avec le format rectangulaire haute définition.

---

### 2. Ajouter votre Fichier CV (PDF)

Pour permettre aux recruteurs de télécharger directement votre fichier PDF officiel :

1. Déposez votre CV au format PDF dans le dossier **`public/`** (par exemple nommé `cv-steven-mbiamy.pdf`) :
   ```bash
   public/cv-steven-mbiamy.pdf
   ```
2. Ouvrez **`lib/portfolio-data.ts`**.
3. Définissez `resumePdfUrl` :
   ```typescript
   export const PORTFOLIO_CONFIG = {
     personal: {
       // ...
       resumePdfUrl: "/cv-steven-mbiamy.pdf",
       // ...
     }
   }
   ```
4. Lorsque cette option est activée, la modale CV propose automatiquement un bouton de **Téléchargement direct (.PDF)** en plus de la demande par e-mail en 1 clic.

---

### 3. Mettre à jour vos Coordonnées & Réseaux

Dans `lib/portfolio-data.ts` :

```typescript
export const PORTFOLIO_CONFIG = {
  personal: {
    fullName: "MBIAMY NGAMENI Steven Loic",
    shortName: "Steven Loic MBIAMY",
    phone: "+237 697501738",
    phoneTel: "+237697501738",
    email: "mbiamysteven@gmail.com",
    
    // Vos profils publics (laissez null si non public) :
    socialLinks: {
      github: "https://github.com/votre-profil",
      linkedin: "https://linkedin.com/in/votre-profil",
    },
  },
  // ...
};
```

---

### 4. Ajouter ou Modifier des Projets

Pour enrichir ou ajouter de futurs projets (Web, Backend, IA, DevOps, Mobile) :

1. Ouvrez `lib/portfolio-data.ts`.
2. Localisez le tableau `projectItems` dans la fonction `getLocalizedData(lang)`.
3. Ajoutez votre nouveau projet selon la structure suivante :
   ```typescript
   {
     id: "mon-nouveau-projet",
     title: "Titre du projet",
     category: "Catégorie (ex: AI / Microservices / Mobile)",
     statusLabel: "Statut (ex: Production · 2026)",
     summary: "Résumé en 2-3 phrases des fonctionnalités et technologies.",
     tags: ["Next.js", "Docker", "PostgreSQL"],
     metrics: [
       { label: "Performance", val: "< 100ms" },
       { label: "Disponibilité", val: "99.9%" }
     ],
     caseStudy: {
       overview: "Description globale du projet...",
       architecture: "Détails sur l'architecture...",
       techStackDetailed: [
         { category: "Frontend", technologies: "Next.js, Tailwind CSS" },
         { category: "Backend", technologies: "FastAPI, Python" }
       ],
       keyEngineeringChallenges: [
         "Gestion de la scalabilité horizontale",
         "Sécurisation des endpoints API"
       ],
       demoUrl: "https://votre-demo.com",
       githubUrl: null, // ou URL de repo GitHub
       demoNotes: "Notes éventuelles pour les recruteurs"
     }
   }
   ```
4. Pensez à compléter la version française (début du fichier) et la version anglaise (vers la fin du fichier) pour conserver le bilinguisme complet.

---

### 5. Logo Officiel ENSPY

Le sceau officiel de l'**École Nationale Supérieure Polytechnique de Yaoundé (ENSPY)** (médaillon doré haute résolution avec le blason, la torche du savoir, la roue dentée et les couleurs nationales du Cameroun) est hébergé de façon centralisée :

- Fichier source interne : `src/assets/images/enspy-logo.png`
- Fichier public web : `public/enspy-logo.png`
- Composant React dédié : `components/EnspyLogo.tsx`

Toute mention institutionnelle utilise automatiquement ce logo avec dimensions adaptatives (`sm`, `md`, `lg`, `xl`).

---

## 🛠️ Stack Technique & Architecture du Frontend

- **Framework** : Next.js 15+ (App Router)
- **Langage** : TypeScript
- **Styling** : Tailwind CSS v4
- **Icônes** : `lucide-react`
- **Animations & Transitions** : `motion/react`
- **Gestion des métadonnées SEO & OpenGraph** : Balises dynamiques dans `app/layout.tsx` avec JSON-LD Schema.org structuré.

---

## 📁 Arborescence du Projet

```text
├── app/
│   ├── layout.tsx                 # Layout racine (Metadata SEO, OpenGraph, JSON-LD)
│   ├── page.tsx                   # Page principale assemblant les sections
│   └── globals.css                # Styles globaux Tailwind CSS
├── components/
│   ├── Navbar.tsx                 # Navigation sticky avec bascule FR/EN et logo ENSPY
│   ├── Hero.tsx                   # Section d'en-tête, badge diplôme, cadre portrait
│   ├── AboutSection.tsx           # Biographie, valeurs d'ingénierie, parcours ENSPY
│   ├── ProjectsSection.tsx        # Projets phares (AGT-Voice, VTC, Fare Calc, AGT-Bot)
│   ├── ArchitectureDiagram.tsx    # Schéma interactif de pipeline vocal temps réel
│   ├── SkillsSection.tsx          # Matrice de compétences classées par domaine
│   ├── EngineeringApproachSection.tsx # Méthodologie & principes de conception
│   ├── EducationSection.tsx       # Formation ENSPY, soutenance 2026 mention excellente
│   ├── ContactSection.tsx         # Formulaire, coordonnées, vCard téléchargeable
│   ├── Footer.tsx                 # Pied de page avec signature ENSPY
│   ├── CaseStudyModal.tsx         # Modale d'étude de cas technique approfondie
│   ├── CVModal.tsx                # Modale de demande ou téléchargement du CV
│   └── EnspyLogo.tsx              # Composant du sceau officiel ENSPY
├── lib/
│   ├── portfolio-data.ts          # Données centralisées (Textes FR/EN, projets, config)
│   └── i18n.ts                    # Typage et définitions de langue
├── public/
│   ├── enspy-logo.png             # Sceau officiel ENSPY haute résolution
│   ├── favicon.ico                # Favicon du navigateur
│   └── (fichiers optionnels : steven-loic.jpg, cv-steven-mbiamy.pdf)
├── src/assets/images/
│   └── enspy-logo.png             # Source interne du logo ENSPY
├── README.md                      # Documentation technique complète
└── package.json                   # Dépendances et scripts de build
```

---

## 💻 Commandes de Développement & Déploiement

### Installation des dépendances
```bash
npm install
```

### Lancement du serveur de développement
```bash
npm run dev
```
L'application est accessible sur [http://localhost:3000](http://localhost:3000).

### Vérification du typage et des linters
```bash
npm run lint
```

### Compilation de production
```bash
npm run build
```

### Démarrage en production
```bash
npm run start
```

---

© 2026 **MBIAMY NGAMENI Steven Loic** — Ingénieur Polytechnicien ENSPY Yaoundé. Tous droits réservés.
