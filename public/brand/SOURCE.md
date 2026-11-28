# Brand files: source

The favicons are unedited renders from [valeon-figures](https://github.com/sayedhfatimi/valeon-figures) (private), `./vf brand --spec specs/brand/vocasync.yaml`, at commit `6cc3125` (the merge of PR #97, the VocaSync identity, `9c5c6a5`). Each matched its pin in valeon-figures' `snapshots/golden.sha256` (30 of 30, checked with `tools/regress.py`'s `digest()`) before it was copied. They are renamed where they are placed; neither is changed. Don't edit them: change the identity in valeon-figures, re-render, verify and copy again.

| Here | valeon-figures render (`brand/vocasync/…`) | Used by |
|---|---|---|
| `../favicon.svg` | `icons/icon.svg` | `src/layouts/BaseLayout.astro` |
| `../favicon.ico` | `icons/favicon.ico` | `src/layouts/BaseLayout.astro` |

The demo's header keeps its own "VocaSync Demo" text: only the favicon follows the identity.
