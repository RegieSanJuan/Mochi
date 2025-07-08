# 🚀 Mochi Setup Guide

## ✅ What's Been Created

Your Mochi AI chatbot project is now set up with:

### ✨ Complete Vercel-Ready Tech Stack:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** with custom Mochi color palette
- **OpenAI GPT-3.5-turbo** integration
- **Vercel deployment** configuration

### 📁 Key Files Created:

- `src/app/page.tsx` - **🎨 MAIN FRONTEND FILE** (Edit here!)
- `src/app/api/chat/route.ts` - OpenAI chatbot logic
- `src/app/layout.tsx` - App layout and metadata
- `.env.local` - Environment variables (add your OpenAI key here)
- `vercel.json` - Vercel deployment configuration

## 🔧 Next Steps

### 1. Fix npm (if needed)

If you're getting npm errors, try:

```bash
# Option 1: Reinstall Node.js from https://nodejs.org
# Option 2: Use yarn instead
npm install -g yarn
yarn install
yarn dev
```

### 2. Get OpenAI API Key

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create account and get API key
3. Add to `.env.local`:
   ```
   OPENAI_API_KEY=your_key_here
   ```

### 3. Install Dependencies & Run

```bash
npm install
npm run dev
```

### 4. Open in Browser

Visit: http://localhost:3000

## 🎨 Frontend Editing Guide

### Primary File: `src/app/page.tsx`

This file contains:

- Chat interface UI
- Message handling
- User input forms
- Styling and layout

### Quick Customizations:

- **Colors**: Use `mochi-` and `calm-` Tailwind classes
- **Text**: Modify welcome messages and placeholders
- **Layout**: Adjust Tailwind classes for spacing/sizing
- **Features**: Add new UI components

### Example Changes:

```tsx
// Change welcome message (line ~15 in page.tsx)
text: "Hi! I'm Mochi, your new AI companion...";

// Change colors
className = "bg-mochi-500"; // Orange theme
className = "bg-calm-500"; // Blue theme

// Modify input placeholder
placeholder = "Tell me how you're feeling...";
```

## 🚀 Vercel Deployment

### Option 1: GitHub Integration

1. Push code to GitHub
2. Connect repo to Vercel
3. Add `OPENAI_API_KEY` environment variable
4. Deploy!

### Option 2: Vercel CLI

```bash
npm install -g vercel
vercel
```

## 🤖 AI Customization

Edit `src/app/api/chat/route.ts` to modify:

- AI personality and tone
- Specialized responses
- Conversation flow
- Error handling

## 🎯 Common Tasks

### Change App Name/Description:

- Edit `src/app/layout.tsx` metadata

### Add New Pages:

- Create files in `src/app/` directory

### Modify Styling:

- Global styles: `src/app/globals.css`
- Component styles: Use Tailwind classes

### Add Dependencies:

```bash
npm install package-name
```

## 🆘 Troubleshooting

### npm Issues:

- Reinstall Node.js
- Try `yarn` instead of `npm`
- Clear npm cache: `npm cache clean --force`

### OpenAI Errors:

- Check API key in `.env.local`
- Verify key has credits
- Check API key permissions

### Build Errors:

- Run `npm install` to fix dependencies
- Check TypeScript errors in VS Code
- Verify all imports are correct

## 📞 Ready to Start!

1. **Fix npm if needed**
2. **Add OpenAI API key to `.env.local`**
3. **Run `npm install && npm run dev`**
4. **Edit `src/app/page.tsx` for frontend changes**
5. **Deploy to Vercel when ready**

Your Mochi AI chatbot is ready to help people with avoidant attachment patterns! 🍡❤️
