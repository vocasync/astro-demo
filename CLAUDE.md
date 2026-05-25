# astro-demo (@vocasync/astro showcase)

A demo Astro blog showcasing `@vocasync/astro` (audio narration + word highlighting).
Lives at `~/projects/vocasync/astro-demo/`; GitHub remote is `vocasync/astro-demo`.
Deployed as a static site to Vercel (`astro-integration-demo.vocasync.io`).

## Package manager & runtime

Use **`bun`**.

```sh
bun install
bun run dev          # astro dev
bun run build        # astro build
bun run sync         # vocasync sync — synthesize + align all posts, write audio-map.json
```

## Plugin dependency: local link vs published

- **Local development of the plugin**: `@vocasync/astro` is linked as `file:../astro`,
  so changes to the plugin's built `dist/` are picked up (run `bun run build` in
  `../astro` after editing it).
- **Deploy (Vercel)**: must use the **published** `@vocasync/astro` version (Vercel has
  no `../astro`). Before deploying, point the dependency at the published semver
  (e.g. `^0.2.0`) — never commit `file:../astro` as the deployed state.

## Math pipeline

Math posts need this exact plugin order in `astro.config.mjs`
(remark) `remark-math` → (rehype) `rehypeMathSpeech` → `rehype-mathjax` → `rehypeAudioWords`.
`rehypeMathSpeech` reads each expression's spoken form from `audio-map.json` (produced by
`vocasync sync`), so `bun run sync` must run before the math highlights. `vocasync.config.mjs`
must have `math.enabled: true`. Engines: `mathjax-full` + `speech-rule-engine` (the CLI
uses them; the build does not).

## Currency vs math: escape `$`

With math enabled, `remark-math` treats `$…$` as inline math, so bare currency like
`$5 … $1200` gets swallowed and garbled. Escape currency dollar signs as `\$` (e.g.
`\$5`, `\$1200`) in post content — see `vocasync-by-the-numbers.md`.

## Per-post overrides

Posts set `voice` / `language` / `format` in frontmatter (validated by `content.config.ts`
and consumed by `vocasync sync`); they fall back to `vocasync.config.mjs`.

## audio-map.json

`src/data/audio-map.json` is committed — it's the cache/source of truth. Deleting it makes
the next `vocasync sync` re-synthesize everything (an API cost). It must be regenerated and
committed whenever post content or per-post voice/language/format changes.

## Commit discipline

Conventional Commits; keep version bumps in their own `chore(release): bump to vX.Y.Z`
commit (package.json + bun.lock only), separate from implementation. Never force-push or
rewrite history.
