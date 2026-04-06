# Japan Etiquette Guide

Japan Etiquette Guide is an Expo-based mobile app for first-time visitors to Japan.

It is not a sightseeing guide. It is a practical etiquette and behavior guide that helps users understand what usually feels respectful in Japan, avoid common mistakes, and move through everyday situations with less stress.

The product tone is:

- practical
- calm
- non-judgmental
- easy to scan on mobile

The goal is not to teach users how to "avoid annoying Japanese people". The goal is to help things go smoothly and give helpful cultural context without sounding strict or moralizing.

## Current Status

- Built with Expo, React Native, and TypeScript
- Uses `expo-router` for app navigation
- iOS-first layout and interaction direction
- Supports 9 UI languages
- Covers 69 etiquette scenes
- All 69 scenes now have detailed content in all 9 supported languages
- Includes `Home`, `Browse`, `Search`, `Category Detail`, `Premium`, and `Settings`
- `Premium` UI exists, but real purchase flow is not implemented yet
- RevenueCat foundation and Premium billing UI are wired, but real App Store product setup is still pending

## Supported Languages

- English
- Japanese
- Korean
- Traditional Chinese
- Simplified Chinese
- Thai
- French
- Spanish
- Vietnamese

## Content Coverage

The app currently includes:

- 19 original scenes
- 50 additional scenes
- 69 total scenes

Main scenario groups include:

- trains, buses, taxis, and airport transfers
- restaurants, cafes, izakaya, bars, and food courts
- shrines, temples, onsen, and ryokan
- hotels, lounges, coin laundry, capsule hotels, and hostels
- supermarkets, drugstores, department stores, and duty-free shops
- museums, festivals, observatories, theme parks, and scenic spots
- toilets, trash, photos, smoking, luggage, bicycles, and residential areas

## App Structure

The current MVP is mainly organized around these screens:

- `Home`
- `Browse`
- `Search`
- `Category Detail`
- `Premium`
- `Settings`

Main routing and app logic are split across `app/` and `src/`.

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
  lib/
  types/
```

## Design Direction

The UI is intentionally calm and editorial rather than loud or touristy.

- warm neutral background
- deep red primary accents
- rounded cards and buttons
- spacing and tonal surfaces instead of thin dividers
- practical first, decorative second

## Tech Stack

- Expo
- React Native
- TypeScript
- expo-router
- Async Storage
- expo-localization
- react-native-purchases
- expo-dev-client

## Getting Started

### Install

```bash
npm install
```

### Start

```bash
npm start
```

For iPhone testing with Expo Go, LAN mode is the most reliable:

```bash
npx expo start --lan -c
```

On Windows, this form is also useful:

```powershell
cmd /c npx.cmd expo start --lan -c
```

For real Premium billing checks later, Expo Go is not enough.  
You will need a development build after RevenueCat and App Store Connect are configured.

The repo now includes a minimal EAS config for this step:

- `eas.json`

### Type Check

```bash
npx tsc --noEmit
```

## Implemented

- 9-language UI switching
- 69 detailed etiquette scenes
- browsing, search, and category detail views
- editorial-style home screen
- premium placeholder screen
- Expo Go testing flow

## Remaining Work

The biggest remaining tasks are:

- final QA across all screens and all languages
- small copy and line-wrap adjustments for longer languages
- adding screenshots to this README
- refining how Premium is presented
- adding minimal automated tests if needed

A simple pre-release checklist is available here:

- `RELEASE_CHECKLIST.md`

Store-facing copy notes are collected here:

- `APP_STORE_METADATA.md`

Premium direction notes are collected here:

- `PREMIUM_PLAN.md`
- `PREMIUM_BILLING_PLAN_JA.md`
- `PREMIUM_TECH_PLAN_JA.md`
- `PREMIUM_IMPLEMENTATION_TASKS_JA.md`
- `PREMIUM_HYPOTHESES.md`
- `PREMIUM_HYPOTHESES_JA.md`
- `REVENUECAT_SETUP_JA.md`

## Notes

- There is no backend, CMS, auth, or database
- Real in-app purchase handling is partially wired, but Apple / RevenueCat product setup is not finished yet
- Content quality and mobile readability have been prioritized over feature breadth
- The project is now in a late MVP polish phase
