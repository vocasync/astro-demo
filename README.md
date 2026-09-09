# VocaSync Astro Demo

A demo blog showcasing the [@vocasync/astro](https://www.npmjs.com/package/@vocasync/astro) integration for adding audio narration with word-level highlighting to Astro sites.

## Features Demonstrated

- 🎙️ **Audio Player** - Built-in accessible player with a floating dock
- 🎨 **Theming** - A whole [`/themes` gallery](#the-themes-page) of the same component under different palettes, shapes and densities
- ✨ **Word Highlighting** - Karaoke-style highlighting that follows along with playback
- 🔢 **Numbers, currency & percent** - Spoken in full ("$1200" → one amount) and highlighted as single units
- 🌍 **Multiple voices & languages** - A French post and several distinct voices via per-post frontmatter
- ∑ **Math narration** - LaTeX equations spoken aloud and highlighted as one unit
- ⌨️ **Keyboard Shortcuts** - Space, arrows, M (mute), H (highlight toggle)
- 🌗 **Dark Mode** - The player inherits this site's palette and dark mode from four tokens
- ⚡ **View transitions** - `<ClientRouter />` is enabled, so the player is exercised across client-side navigation
- 📱 **Responsive** - Works on all device sizes

The posts in `src/content/blog/` each demonstrate something different: a French post
(`language: fr`, `voice: shimmer`), a math post (`voice: nova`), and a numbers/currency
post (`voice: coral`) — each set via per-post frontmatter overrides.

## The `/themes` page

`src/pages/themes.astro` is the interesting file. It renders the same component a
dozen times under different themes, shapes, densities, control orders and languages —
and **nothing on that page overrides a VocaSync class or uses `!important`**. It is all
custom properties and props.

Worth reading for two patterns in particular:

**Point the player's seeds at tokens you already have.** `src/layouts/BaseLayout.astro`
does this, which is why the player matches this site and follows its dark mode without
restating a single colour:

```css
:root {
  --vocasync-accent: var(--color-primary);
  --vocasync-surface: var(--color-bg);
  --vocasync-text: var(--color-text);
}
```

**A theme is four values.** Each block in `themes.astro` sets only the seeds; borders,
muted text, hover states and the play button's contrast colour all derive from them.

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

The stylesheet is injected by the integration — there is nothing to import. Set four
seeds and the rest derives:

```css
:root {
  --vocasync-accent: #8b5cf6;
  --vocasync-surface: #ffffff;
  --vocasync-text: #1e1b2e;
  --vocasync-highlight: #22c55e;
}
```

Every rule the player ships sits in a cascade layer and is wrapped in `:where()`, so
your own CSS wins without `!important`. See `/themes` for the full range, and the
[token reference](https://github.com/vocasync/astro#theming) for every knob.

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
