# Release Checklist

This file is a simple pre-release checklist for Japan Etiquette Guide.

## README

- Add updated screenshots for:
- Home
- Browse
- Search
- Category Detail
- Premium Preview
- Language
- Settings
- Confirm README still matches the current app structure and feature set
- Confirm README still states that Premium purchase flow is not implemented

## Visual QA

- Check all main screens in English
- Check all main screens in Japanese
- Check all main screens in Korean
- Check all main screens in Traditional Chinese
- Check all main screens in Simplified Chinese
- Check all main screens in Thai
- Check all main screens in French
- Check all main screens in Spanish
- Check all main screens in Vietnamese
- Look for long labels wrapping badly in buttons or cards
- Check tab labels do not collide or truncate awkwardly
- Check detail sections remain readable in longer languages
- Check Premium Preview does not look like a real purchase screen

## Content QA

- Verify a few high-risk scenes in every language:
- Train
- Restaurant
- Shrine
- Onsen
- Toilet
- Verify at least one airport scene in every language
- Verify at least one hotel scene in every language
- Verify at least one shopping scene in every language
- Verify at least one sightseeing scene in every language
- Check that category title, short description, and detail content match each other

## Technical QA

- Run `npx tsc --noEmit`
- Start the app with `npx expo start --lan -c`
- Open on iPhone using Expo Go
- Confirm main navigation and deep links still work
- Confirm language switching updates screen copy correctly
- Confirm search still returns relevant categories

## Final Decision

- Decide whether Premium Preview should stay as-is for launch
- Decide whether Feedback remains a placeholder or gets a real submission flow later
- Decide whether to add a minimal automated test setup after release or before release
