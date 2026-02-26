<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1r8QqrsJvRG0a9zWCdBFOeYcIDHMJUJ4Y

## Deployment (Beginner Friendly)

- Full step-by-step GitHub Pages guide (English + العربية): `GITHUB_PAGES_BEGINNER.md`
- Includes a no-terminal method using only the GitHub website.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. (Optional) Build-time story images generation:
   - Set `GOOGLE_API_KEY` (preferred) or `GEMINI_API_KEY` in your environment.
   - See `env.example` for the variable names.
   - Run: `npm run generate:story-images`
3. Run the app:
   `npm run dev`
