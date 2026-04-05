# Premium Plan

This document defines how Premium should work in `Japan Etiquette Guide`.

The goal is to make Premium feel useful and fair without weakening the core etiquette guide.

## Product Principle

Premium should add depth, structure, and convenience.

Premium should **not** lock away the basic etiquette that first-time visitors need most.

That means:

- Free should remain enough for a first trip
- Premium should feel like a meaningful upgrade, not a punishment
- Premium should focus on deeper understanding, specialized use cases, and convenience

## Free vs Premium

### Free should keep

These should remain available to everyone:

- core travel etiquette for first-time visitors
- common public-space behavior
- transport basics
- restaurant basics
- shrine / temple basics
- onsen basics
- shopping and hotel basics
- all core detail structure:
  - Quick View
  - What to do
  - What to avoid
  - Why this matters
  - Common mistakes

Reason:

This is the main trust layer of the app. If the app stops being genuinely useful for first-time visitors, Premium will feel manipulative.

### Premium should add

Premium should focus on content that feels like:

- deeper cultural context
- more nuanced edge cases
- curated collections for specific travel styles
- tools that reduce friction during a trip

Recommended Premium buckets:

1. Deep Context

- expanded cultural notes
- "why this feels respectful" deep dives
- local nuance and variation
- when something is flexible vs sensitive

2. Situation Packs

- business trip etiquette
- family / kids in public spaces
- long-stay / repeat visitor etiquette
- staying with locals
- social situations and invitations

3. Phrase Support

- short polite phrases for difficult moments
- "how to ask without sounding abrupt"
- simple Japanese phrase cards for etiquette-heavy situations

4. Smart Collections

- airport arrival pack
- hotel and stay pack
- dining out pack
- shopping pack
- sacred places pack
- event / festival pack

5. Convenience Layer

- offline bundles
- saved lists / trip collections
- trip-type recommendations
- "before you go" checklists

## Recommended launch approach

Do **not** start by locking random existing scenes.

Instead:

### Phase 1

- Keep the current 69-scene guide fully usable
- Use Premium as a preview / future direction
- Define Premium-only collections and deep-dive modules

### Phase 2

- Add Premium-only content that does not weaken the free app
- Examples:
  - cultural deep dives
  - phrase cards
  - business pack
  - long-stay pack

### Phase 3

- Add real purchase flow
- Add restore purchases
- Add purchase state handling
- Add Premium unlocked view

This keeps trust high and avoids paywalling the app too early.

## Content strategy recommendation

For this app, Premium should probably be built around **new layers**, not basic scene removal.

Recommended structure:

### Base Layer

- 69 free etiquette scenes
- practical enough for first-time visitors

### Premium Layer

- deeper explanation tabs or modules
- extra scenario packs
- phrase support
- convenience tools

This is better than:

- making major basic scenes unreadable
- hiding too much transport / dining / shrine / onsen content

## Current Premium-tagged scenes

The codebase already contains some Premium-tagged category IDs:

- `onsen`
- `shrine`
- `temple`
- `ryokan`
- `visiting-home`
- `residential-private`
- `bicycle`

Recommendation:

Do not treat these as final locked scenes yet.

Instead, use them as **candidates** for deeper Premium treatment, such as:

- expanded etiquette context
- additional cultural notes
- more advanced examples
- traveler phrase support

## UX states to implement later

Premium needs 3 states:

### 1. Preview state

User is not premium.

Show:

- what Premium is for
- what extra value it adds
- what stays free

Do not show:

- fake purchase success
- fake restore flow
- fake locked content that cannot be explained clearly

### 2. Locked state

User opens a Premium-only module without purchase.

Show:

- short explanation of value
- what is included
- clear CTA to upgrade
- way back to free content

### 3. Unlocked state

User has Premium.

Show:

- Premium collections
- deep-dive modules
- saved / convenience tools if included

## Technical implementation order

Recommended order:

1. Finalize Premium content definition
2. Create local mock purchase state
3. Build UI for:
   - preview
   - locked
   - unlocked
4. Wire category / collection access logic
5. Add real IAP integration
6. Add restore purchases
7. Add final QA for paid / unpaid flows

## Suggested first Premium MVP

If Premium were to ship in a simple first version, this is a strong starting point:

- Premium Collection: Business in Japan
- Premium Collection: Staying with Locals
- Premium Collection: Long-Stay Etiquette
- Extra cultural notes for:
  - onsen
  - shrine
  - temple
  - ryokan
- Short phrase cards for:
  - hotel check-in
  - asking staff for help
  - handling mistakes politely

This would be easier to justify than locking the core travel guide.

## What to build next

Before real billing, the next practical step should be:

1. decide Premium content packages
2. define `free`, `preview`, and `premium-only` content types
3. update the Premium screen to match those packages
4. add a local mock `isPremium` state for UI testing

Only after that should real purchase infrastructure be added.
