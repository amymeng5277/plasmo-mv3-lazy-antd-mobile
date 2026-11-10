import { lazy, Suspense, useState } from "react"

// Import the implementation modules, not the index modules that import CSS
// for document-wide injection. Styles are scoped explicitly in mount.tsx.
// This is an internal Ant Design Mobile path: pin the dependency version.
import { Button } from "antd-mobile/es/components/button/button"
import { Input } from "antd-mobile/es/components/input/input"
import { Switch } from "antd-mobile/es/components/switch/switch"

const Advanced = lazy(() => import("./advanced"))

type PanelProps = {
  open: boolean
  onClose(): void
}

export function Panel({ open, onClose }: PanelProps) {
  const [name, setName] = useState("")
  const [enabled, setEnabled] = useState(true)
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [metadata, setMetadata] = useState<string>("")

  if (!open) return null

  const loadMetadata = async () => {
    try {
      const response = await fetch(chrome.runtime.getURL("resources/demo.json"))
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      const data: { message: string } = await response.json()
      setMetadata(data.message)
    } catch (error) {
      setMetadata(`Fetch failed: ${String(error)}`)
    }
  }

  return (
    <section
      className="tw-mb-3 tw-w-[340px] tw-max-w-[calc(100vw-32px)] tw-rounded-2xl tw-bg-white tw-p-4 tw-text-slate-800 tw-shadow-2xl"
      role="dialog"
      aria-label="Lazy Ant Design Mobile panel"
    >
      <div className="tw-flex tw-items-center tw-justify-between tw-gap-2">
        <h2 className="tw-m-0 tw-text-lg tw-font-semibold">Lazy MV3 UI</h2>
        <Button size="small" fill="none" onClick={onClose}>
          Close
        </Button>
      </div>
      <p className="tw-my-3 tw-text-sm tw-text-slate-500">
        React and Ant Design Mobile loaded only after the first click.
      </p>
      <label className="tw-mb-1 tw-block tw-text-xs tw-font-medium">Name</label>
      <div className="tw-rounded-lg tw-border tw-border-slate-200 tw-px-2 tw-py-2">
        <Input value={name} onChange={setName} placeholder="Your name" clearable />
      </div>
      <div className="tw-mt-4 tw-flex tw-items-center tw-justify-between">
        <span>Feature enabled</span>
        <Switch checked={enabled} onChange={setEnabled} />
      </div>
      <div className="tw-mt-4 tw-flex tw-gap-2">
        <Button color="primary" onClick={() => void loadMetadata()}>
          Fetch WAR asset
        </Button>
        <Button onClick={() => setShowAdvanced((value) => !value)}>
          {showAdvanced ? "Hide editor" : "Load editor"}
        </Button>
      </div>
      {metadata && <p className="tw-mt-3 tw-text-xs tw-text-blue-700">{metadata}</p>}
      {showAdvanced && (
        <Suspense fallback={<p className="tw-mt-3">Loading editor chunk...</p>}>
          <Advanced />
        </Suspense>
      )}
    </section>
  )
}
