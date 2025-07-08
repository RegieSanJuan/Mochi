<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Mochi AI Chatbot - Development Guidelines

## Project Overview

This is Mochi, an AI chatbot specifically designed to help people with avoidant attachment patterns. The application uses Next.js 15 with TypeScript, Tailwind CSS, and OpenAI's GPT-3.5-turbo for compassionate conversational AI.

## Key Technologies

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom Mochi and Calm color palettes
- **AI**: OpenAI GPT-3.5-turbo with specialized prompts for attachment theory
- **Deployment**: Vercel (optimized configuration included)

## Design Principles

- **Compassionate Design**: Use warm, soft colors (mochi oranges, calm blues)
- **Accessibility**: Ensure all UI elements are accessible
- **Gentle UX**: Avoid overwhelming or pushy interactions
- **Emotional Safety**: Create a safe space for vulnerable conversations

## Code Style Guidelines

- Use functional components with React hooks
- Implement proper TypeScript types for all data structures
- Follow Next.js 15 App Router patterns
- Use Tailwind CSS classes for styling
- Implement proper error handling for API calls

## AI Conversation Guidelines

When working on the chatbot functionality:

- Focus on avoidant attachment patterns and emotional growth
- Maintain warm, patient, and non-judgmental tone
- Encourage small steps towards emotional vulnerability
- Provide practical relationship tools
- Validate feelings while promoting healthy attachment

## File Structure

- `src/app/page.tsx` - Main chat interface (EDIT HERE FOR FRONTEND CHANGES)
- `src/app/api/chat/route.ts` - OpenAI API integration
- `src/app/layout.tsx` - App layout and metadata
- `src/app/globals.css` - Global styles and Tailwind directives

## Environment Variables Required

- `OPENAI_API_KEY` - Your OpenAI API key for the chatbot functionality
