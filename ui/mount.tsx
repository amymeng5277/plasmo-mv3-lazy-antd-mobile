import type { Root } from "react-dom/client"
import { createRoot } from "react-dom/client"

// Keep CSS as explicit URL assets instead of using data-text: inside
// a dynamically imported module. Parcel can generate spurious CSS
// sidecar dependencies for that combination, leading to ERR_FILE_NOT_FOUND.
// Plasmo's url: scheme emits these compiled stylesheets as extension
// resources and includes them in web_accessible_resources.
import antdCssUrl from "url:antd-mobile/bundle/style.css"
import tailwindCssUrl from "url:./panel.css"

import { Panel } from "./panel"

// Fetch each stylesheet only on the first UI open. A rejected load can
// be retried when the user clicks Retry UI.
let stylesPromise: Promise<[string, string]> | undefined

async function fetchCss(url: string): Promise<string> {
  let response: Response
  try {
    response = await fetch(url)
  } catch (cause) {
    throw new Error(`Cannot fetch extension CSS asset: ${url}; ${String(cause)}`)
  }
  if (!response.ok) {
    throw new Error(`Extension CSS asset returned HTTP ${response.status}: ${url}`)
  }
  return response.text()
}

async function loadStyles(): Promise<[string, string]> {
  stylesPromise ??= Promise.all([
    fetchCss(antdCssUrl),
    fetchCss(tailwindCssUrl)
  ]).catch((error) => {
    stylesPromise = undefined
    throw error
  })
  return stylesPromise
}

export async function mountPanel(
  shadowRoot: ShadowRoot,
  onVisibilityChange: (visible: boolean) => void
) {
  const [antdCssText, tailwindCssText] = await loadStyles()
  const antdStyle = document.createElement("style")
  // Ant Design Mobile defines variables on :root. Inside a shadow tree,
  // that selector must target :host instead.
  antdStyle.textContent = antdCssText.replace(/:root\b/g, ":host")
  const tailwindStyle = document.createElement("style")
  tailwindStyle.textContent = tailwindCssText
  shadowRoot.append(antdStyle, tailwindStyle)

  const container = document.createElement("div")
  container.id = "plasmo-lazy-panel"
  shadowRoot.appendChild(container)

  const root: Root = createRoot(container)
  let open = false

  const render = () => {
    root.render(
      <Panel
        open={open}
        onClose={() => {
          open = false
          render()
          onVisibilityChange(false)
        }}
      />
    )
  }

  return {
    toggle() {
      open = !open
      render()
      onVisibilityChange(open)
      return open
    }
  }
}
