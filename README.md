# VocaSync Astro Demo

A demo blog showcasing the [@vocasync/astro](https://www.npmjs.com/package/@vocasync/astro) integration for adding audio narration with word-level highlighting to Astro sites.

## Features Demonstrated

- 🎙️ **Audio Player** - Built-in accessible audio player with mini-player mode
- ✨ **Word Highlighting** - Karaoke-style highlighting that follows along with playback
- 🔢 **Numbers, currency & percent** - Spoken in full ("$1200" → one amount) and highlighted as single units
- 🌍 **Multiple voices & languages** - A French post and several distinct voices via per-post frontmatter
- ∑ **Math narration** - LaTeX equations spoken aloud and highlighted as one unit
- ⌨️ **Keyboard Shortcuts** - Space, arrows, M (mute), H (highlight toggle)
- 🌗 **Dark Mode** - Automatic theme detection
- 📱 **Responsive** - Works on all device sizes

The posts in `src/content/blog/` each demonstrate something different: a French post
(`language: fr`, `voice: shimmer`), a math post (`voice: nova`), and a numbers/currency
post (`voice: coral`) — each set via per-post frontmatter overrides.

## Getting Started

### 1. Install Dependencies

```bash
bun install
```

### 2. Set Up API Key

Copy the example environment file and add your VocaSync API key:

```bash
cp .env.example .env
```

Edit `.env` and replace the placeholder with your actual API key from [vocasync.io](https://vocasync.io).

### 3. Sync Audio Content

Generate audio narration for your blog posts:

```bash
bun run sync
```

This will:
- Read all markdown posts from `src/content/blog/`
- Submit them to VocaSync for synthesis
- Save the audio map to `src/data/audio-map.json`

### 4. Start Development Server

```bash
bun run dev
```

Open [http://localhost:4321](http://localhost:4321) to see the demo.

## Project Structure

```
vocasync-astro-demo/
├── astro.config.mjs        # Astro + VocaSync integration config
├── vocasync.config.mjs     # VocaSync settings
├── src/
│   ├── content/
│   │   └── blog/           # Blog posts (Markdown)
│   ├── data/
│   │   └── audio-map.json  # Generated audio metadata
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   └── pages/
│       ├── index.astro
│       └── blog/[slug].astro
└── public/
    └── favicon.svg
```

## Customizing

### Player Styles

The audio player uses CSS variables for theming. Import the variables and override as needed:

```css
@import "@vocasync/astro/styles/variables.css";

:root {
  --vocasync-primary: #8b5cf6;
  --vocasync-highlight: #22c55e;
}
```

### VocaSync Configuration

Edit `vocasync.config.mjs` (global defaults) or a post's frontmatter (per-post overrides):
- Voice (alloy, ash, coral, echo, fable, onyx, nova, sage, shimmer)
- Quality (sd, hd)
- Output format (mp3, aac, opus, flac, wav)
- Language (14 alignment-supported languages)

## Learn More

- [VocaSync Documentation](https://vocasync.io/docs)
- [@vocasync/astro on npm](https://www.npmjs.com/package/@vocasync/astro)
- [Astro Documentation](https://docs.astro.build)

## License

MIT
