# 7 Days to Die Skill Calculator

A React + TypeScript calculator for planning skill builds in **7 Days to Die**.

## Stack

- React
- TypeScript
- Vite

## App Structure

Main application code lives in `src`.

- `src/components` contains the UI
- `src/features/skills-calculator` contains calculator state and screen-level logic
- `src/entities/skill` contains domain types, selectors, calculations, and share-link logic
- `src/data.ts` contains the skill catalog used by the app

## Main Entry Points

- `src/main.tsx`
- `src/App.tsx`
- `src/components/SkillsCalculator.tsx`

## Notes

- The app uses URL hashes for shareable builds
- The skill catalog is stored in `src/data.ts`
