import { useState } from "react"
import { TextArea } from "antd-mobile/es/components/text-area/text-area"

export default function Advanced() {
  const [value, setValue] = useState("")

  return (
    <div className="tw-mt-4 tw-rounded-lg tw-border tw-border-slate-200 tw-p-3">
      <p className="tw-mb-2 tw-mt-0 tw-text-xs tw-font-semibold">
        Second dynamic import() boundary
      </p>
      <TextArea
        value={value}
        onChange={setValue}
        rows={3}
        placeholder="Editor code loads on demand"
      />
    </div>
  )
}
