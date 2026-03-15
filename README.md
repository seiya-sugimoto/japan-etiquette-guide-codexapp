# Japan Etiquette Guide

Japan Etiquette Guide is a mobile app for foreign visitors to Japan.

It is not a sightseeing guide. The app focuses on practical etiquette, manners, and unwritten social rules that help travelers feel more confident in everyday situations while also supporting comfortable shared spaces for both visitors and local residents.

## Product Concept

Many visitors do not struggle because they lack interest or respect. They struggle because many Japanese social expectations are quiet, contextual, and easy to miss when you are moving quickly through a new country.

This app is designed to reduce that anxiety.

The goal is to help users:

- understand key etiquette in 3 to 10 seconds
- avoid common misunderstandings
- feel calm and confident while traveling
- learn the difference between hard rules, local patterns, and "safe default" behavior

The tone of the app is intentionally:

- practical
- calm
- non-judgmental
- culturally natural
- easy to scan on mobile

## Who It Is For

- first-time and second-time visitors to Japan
- travelers who do not read Japanese well
- people who want simple, respectful guidance in real situations
- users who care about shared comfort, not just "avoiding mistakes"

## Current App Scope

The app currently includes:

- Home
- Browse
- Search
- Settings
- Category detail screens
- language switching
- premium content structure
- localized UI with lightweight non-English detail fallbacks

## Core Guide Categories

Current guide coverage includes:

- Train
- Restaurant Basics
- Shrine Visits
- Onsen and Sento
- Temple Visits
- Ryokan Etiquette
- Shoes Indoors
- Trash and Public Manners
- Payments and Tipping
- Chopsticks
- Visiting a Home
- Convenience Stores
- Queues and Escalators
- Photos and Video
- Smoking
- Large Luggage
- Residential Areas and Private Stays
- Toilets
- Bicycles and Rental Cycles

## Design Direction

The visual direction is built around a calm and refined mobile experience:

- soft off-white / paper-like surfaces
- deep indigo as the main color
- muted vermilion accents
- spacious card-based layouts
- fast scanning and one-handed mobile use

The app aims to feel distinctly Japanese without becoming cliché, flashy, or touristy.

## Tech Stack

- Expo
- React Native
- TypeScript
- expo-router
- AsyncStorage for lightweight local settings/state

## Localization

The app includes UI language support for:

- English
- Japanese
- Korean
- Traditional Chinese
- Simplified Chinese
- Thai
- French
- Spanish
- Vietnamese

At the moment, English contains the primary content copy. Non-English languages use localized UI plus lightweight fallback content structure, with room for fuller content translation later.

## Premium Structure

The project includes a premium-ready content model for future one-time unlock flows.

Today this mostly supports:

- free vs premium category separation
- premium badges and routing
- future purchase integration points

## Project Structure

The app uses a thin `app/` route layer with most logic inside `src/`.

```text
app/
  (tabs)/
  category/
  premium/
  language/
  feedback/

src/
  components/
  data/
  features/
  lib/
  types/
```

## Running Locally

```bash
npm install
npm start
```

Type-checking:

```bash
npx tsc --noEmit
```

## Status

This repository is currently in active MVP development.

Recent work includes:

- Expo app foundation
- category-based content model
- UI polish inspired by travel-friendly mobile references
- multilingual settings and UI support
- new etiquette scenarios based on high-friction travel moments
- content tone revisions to make guidance more practical and less judgmental

## Product Principles

This project is not meant to judge visitors.

It is meant to help foreign visitors move through Japan more naturally and with less stress, while encouraging mutual comfort in shared spaces.

When adding or editing content, prioritize:

- clarity over completeness
- guidance over correction
- realistic travel usefulness over cultural trivia
- local nuance over rigid universal rules

