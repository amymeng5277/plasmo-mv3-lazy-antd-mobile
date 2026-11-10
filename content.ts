import type { PlasmoCSConfig } from "plasmo"

// IMPORTANT: This entry must stay .ts, not .tsx. No React/AntD/CSS imports here.
export const config: PlasmoCSConfig = {
  matches: ["https://example.com/*"],
  run_at: "document_idle"
}

type PanelController = { toggle(): boolean }

const host = document.createElement("div")
host.id = "plasmo-lazy-demo-host"
host.style.cssText = [
  "position:fixed",
  "right:16px",
  "bottom:16px",
  "z-index:2147483647",
  "pointer-events:auto"
].join(";")

// The host page can see the element, but not the content script's JS variables.
const shadowRoot = host.attachShadow({ mode: "open" })
const launcher = document.createElement("button")
launcher.type = "button"
launcher.textContent = "Open UI"
launcher.title = "Load Ant Design Mobile only on first click"
launcher.style.cssText = [
  "font:600 13px system-ui,sans-serif",
  "color:white",
  "background:#1677ff",
  "border:0",
  "border-radius:999px",
  "box-shadow:0 5px 22px #0003",
  "padding:12px 18px",
  "cursor:pointer"
].join(";")
shadowRoot.appendChild(launcher)
document.documentElement.appendChild(host)

let controllerPromise: Promise<PanelController> | undefined
let opening = false

async function toggleUi() {
  // Prevent two rapid clicks from opening and immediately closing the panel.
  if (opening) return
  opening = true
  launcher.disabled = true
  launcher.textContent = "Loading..."

  try {
    // This relative, statically analyzable import is the code-splitting boundary.
    // Parcel resolves the emitted chunk filename and WAR during build.
    controllerPromise ??= import("./ui/mount")
      .then(({ mountPanel }) =>
        mountPanel(shadowRoot, (isOpen) => {
          launcher.textContent = isOpen ? "Close UI" : "Open UI"
        })
      )
      .catch((error) => {
        controllerPromise = undefined
        throw error
      })

    const controller = await controllerPromise
    const isOpen = controller.toggle()
    launcher.textContent = isOpen ? "Close UI" : "Open UI"
  } catch (error) {
    console.error("[lazy-plasmo] UI load failed", error)
    launcher.textContent = "Retry UI"
  } finally {
    launcher.disabled = false
    opening = false
  }
}

launcher.addEventListener("click", () => {
  void toggleUi()
})

// Optional keyboard trigger with no React initialization.
document.addEventListener("keydown", (event) => {
  if (event.altKey && event.shiftKey && event.key.toLowerCase() === "l") {
    event.preventDefault()
    void toggleUi()
  }
})
