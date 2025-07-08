# 🍡 Mochi - AI Companion for Emotional Support

Mochi is a compassionate AI chatbot specifically designed to help people with avoidant attachment patterns develop deeper emotional connections and healthier relationships.

![Mochi AI Chatbot](https://img.shields.io/badge/AI-Chatbot-orange) ![Next.js](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-blue) ![Vercel](https://img.shields.io/badge/Vercel-Ready-green)

## ✨ Features

- **Specialized AI Support**: GPT-3.5-turbo trained specifically for avoidant attachment patterns
- **Compassionate Design**: Warm, non-threatening UI with soft color palettes
- **Real-time Chat**: Instant responses with typing indicators
- **Mobile Responsive**: Works seamlessly across all devices
- **Privacy Focused**: Conversations are not stored permanently
- **Vercel Optimized**: Ready for instant deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- OpenAI API Key ([Get one here](https://platform.openai.com/api-keys))

### Installation

1. **Clone and Install**:

   ```bash
   cd mochi
   npm install
   ```

2. **Set up Environment Variables**:
   Create `.env.local` and add your OpenAI API key:

   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```

3. **Run Development Server**:

   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Where to Edit the Frontend

### Main Chat Interface

**File**: `src/app/page.tsx`

- This is your primary frontend file
- Contains the entire chat UI, message handling, and user interactions
- Modify colors, layout, components, and behavior here

### Styling

**File**: `src/app/globals.css`

- Global styles and Tailwind CSS directives
- Custom CSS variables and theme configurations

### Layout & Metadata

**File**: `src/app/layout.tsx`

- App-wide layout, fonts, and metadata
- Modify page title, description, and overall structure

### Color Palette

The app uses custom Tailwind colors:

- **Mochi Colors**: Warm oranges (`mochi-50` to `mochi-900`)
- **Calm Colors**: Soothing blues (`calm-50` to `calm-900`)

## 🤖 OpenAI Configuration

### API Key Setup

1. Get your API key from [OpenAI Platform](https://platform.openai.com/api-keys)
2. Add it to `.env.local`:
   ```env
   OPENAI_API_KEY=sk-your-key-here
   ```

### Chat API Endpoint

**File**: `src/app/api/chat/route.ts`

- Handles OpenAI API calls
- Contains specialized prompts for avoidant attachment support
- Modify AI behavior and responses here

### Customizing AI Behavior

The AI is configured with specific instructions for:

- Creating safe, non-judgmental spaces
- Understanding avoidant attachment patterns
- Encouraging emotional vulnerability
- Providing practical relationship tools

## 🚀 Vercel Deployment

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/mochi)

### Manual Deployment

1. **Push to GitHub**:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy to Vercel**:

   - Connect your GitHub repo to Vercel
   - Add `OPENAI_API_KEY` to environment variables
   - Deploy!

3. **Environment Variables in Vercel**:
   ```
   OPENAI_API_KEY = your_openai_api_key_here
   ```

## 📁 Project Structure

```
mochi/
├── src/
│   ├── app/
│   │   ├── api/chat/route.ts    # OpenAI API endpoint
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # App layout
│   │   └── page.tsx            # 🎨 MAIN FRONTEND FILE
├── .env.local                   # Environment variables
├── .github/
│   └── copilot-instructions.md  # AI development guidelines
├── package.json                 # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── vercel.json                 # Vercel deployment config
```

## 🎯 Development Focus Areas

### For Frontend Changes:

- **Primary File**: `src/app/page.tsx`
- **Styling**: Modify Tailwind classes or `globals.css`
- **Layout**: Update `src/app/layout.tsx`

### For AI Behavior:

- **API Logic**: `src/app/api/chat/route.ts`
- **Prompts**: Modify the system message in the API route

### For Deployment:

- **Vercel Config**: `vercel.json`
- **Environment**: `.env.local` for development

## 🌈 Color Theme

```css
/* Mochi (Warm Orange) */
mochi-50: #fef7f0   /* Lightest */
mochi-500: #f18b56  /* Primary */
mochi-900: #7a3829  /* Darkest */

/* Calm (Soothing Blue) */
calm-50: #f0f9ff    /* Lightest */
calm-500: #0ea5e9   /* Primary */
calm-900: #0c4a6e   /* Darkest */
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make changes (primarily in `src/app/page.tsx` for frontend)
4. Test your changes
5. Submit a pull request

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🆘 Support

- **Frontend Issues**: Check `src/app/page.tsx` and Tailwind configuration
- **AI Issues**: Verify OpenAI API key in `.env.local`
- **Deployment Issues**: Check Vercel environment variables

---

Built with ❤️ for those seeking deeper emotional connections.
