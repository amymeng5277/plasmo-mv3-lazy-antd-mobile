# Plasmo + Ant Design Mobile + Tailwind CSS + MV3 lazy import()

This is a self-contained rewrite of the Plasmo example pattern. The initial Content Script is deliberately written in `content.ts` and avoids importing React, Ant Design Mobile or Tailwind CSS. The feature code is loaded by a statically-analyzable `import("./ui/mount")` when the user clicks the small floating launcher. A second `React.lazy()` boundary only loads the editor when requested.

## Development

Requirements: Node.js 20 or later, npm.

```bash
npm install
npm run dev
```

Visit `https://example.com/`, open `chrome://extensions`, enable Developer Mode and choose **Load unpacked**, selecting `build/chrome-mv3-dev`. Reload `https://example.com/` and click **Open UI** in the bottom-right corner. The keyboard shortcut is `Alt+Shift+L`.

## Production

```bash
npm run build
npm run verify
```

Load `build/chrome-mv3-prod` from `chrome://extensions` for production testing.

## Files

- `content.ts`: tiny Classic Script bootstrap in the Content Script `ISOLATED` world. No initial React runtime.
- `ui/mount.tsx`: lazy entry that loads React and creates a React root inside an existing ShadowRoot. CSS is inserted into that ShadowRoot when the feature loads.
- `ui/panel.tsx`: Ant Design Mobile controls plus Tailwind CSS utilities.
- `ui/advanced.tsx`: second lazy chunk, loaded on demand via `React.lazy`.
- `ui/panel.css`: Tailwind style input for lazy UI, including a `@config` directive.
- `popup.tsx` / `popup.css`: separate popup entry using a distinct Tailwind config and prefix.
- `resources/demo.json`: explicitly listed WAR asset, loaded by the UI on user action.
- `scripts/inspect-build.mjs`: reports generated entrypoints, other JS files, and WAR declarations.

## WAR: generated chunks vs. explicitly exposed resources

`package.json` explicitly exposes only `resources/demo.json`. For `import("./ui/mount")` and `React.lazy()`, Parcel/Plasmo must generate hashed chunks and add them to the final manifest's `web_accessible_resources`. Do not hard-code the source `.tsx` paths or blindly expose every `.js` file in `package.json`. After `npm run build`, inspect `build/chrome-mv3-prod/manifest.json`. This distinction is intentional and follows Plasmo's asset and Parcel's Web Extension conventions.

## CSS isolation

Plasmo Content Scripts UI (`content.tsx`) would automatically bundle a React runtime in the initial Content Script. This demo manually mounts React after the dynamic import, so it does *not* export a Plasmo CSUI component. The bootstrap puts only a minimal native launcher in a ShadowRoot. Lazy CSS is transformed to a JavaScript string with `data-text:` and appended to the ShadowRoot after the first click. The styles use independent Tailwind configs: `tw-` for the lazily loaded panel and `pop-` for the popup. Ant Design Mobile bundle styles are loaded on demand and `:root` selectors are rewritten to `:host` for CSS variable scoping.

**Important tradeoff:** `antd-mobile/bundle/style.css` includes the full component CSS and increases the first UI-open cost. It is chosen for a straightforward isolation example. For production, replace it with a tested component-level stylesheet build. To avoid automatic document-wide CSS insertion, the demo imports Ant Design Mobile's version-pinned implementation modules rather than the component index modules. These are internal paths and should be rechecked when upgrading `antd-mobile`.

## Measuring the actual benefit

In Chrome DevTools Performance and Network:

1. Reload the tab without opening the panel. The main content-script entry should execute, but neither React nor Ant Design Mobile should be initialized.
2. Click **Open UI**. This is when the lazy entry and its dependencies should load and execute.
3. Click **Load editor**. This should cause the separate editor chunk to load.
4. Use `npm run verify` to inspect the production build. If the build has inlined React/AntD into the content entry or fails to expose lazy chunks, do not assume the demo has achieved lazy loading: investigate the Parcel output.

The demo uses only bundled code. It does not fetch JavaScript from a CDN, inject remote scripts, call `eval`, or require `unsafe-eval`.

## Browser compatibility

Chrome MV3 is the initial test target. Test Safari and Firefox separately: Content Script dynamic `import()` and WAR handling have implementation-specific differences. Build output inspection is necessary, but browser execution is the final proof.

## Verification status

The files are a starter project and are statically validated. A full `npm install` / `plasmo build` cannot be run in the generation environment without network access to npm, so the produced package must be built and browser-tested before relying on it in production.
