import { existsSync, readFileSync, readdirSync, statSync } from "node:fs"
import { join, relative } from "node:path"

const dist = "build/chrome-mv3-prod"
const manifestPath = join(dist, "manifest.json")
if (!existsSync(manifestPath)) {
  console.error(`Missing ${manifestPath}. First run: npm run build`)
  process.exitCode = 1
} else {
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8"))
  const listFiles = (directory) => readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? listFiles(path) : [path]
  })

  const files = listFiles(dist).filter((path) => path.endsWith(".js"))
  const contentEntries = (manifest.content_scripts ?? []).flatMap((entry) => entry.js ?? [])
  const resources = (manifest.web_accessible_resources ?? []).flatMap((entry) => entry.resources ?? [])
  console.log("Content Script initial entries:")
  for (const entry of contentEntries) {
    const path = join(dist, entry)
    console.log(`  ${entry}  ${existsSync(path) ? `${Math.ceil(statSync(path).size / 1024)} KiB` : "MISSING"}`)
  }
  console.log("Other JS bundles (popup, lazy chunks, runtime):")
  for (const path of files.filter((path) => !contentEntries.includes(relative(dist, path)))) {
    console.log(`  ${relative(dist, path)}  ${Math.ceil(statSync(path).size / 1024)} KiB`)
  }
  console.log("WAR patterns:")
  for (const pattern of resources) console.log(`  ${pattern}`)
  console.log("Check DevTools Network: the lazy UI JS should first load after Open UI is clicked.")
  console.log("Check the built manifest for generated JS chunk WAR entries as well as demo.json.")
  if (!contentEntries.length) process.exitCode = 1
  if (!existsSync(join(dist, "resources/demo.json"))) {
    console.error("WARN: resources/demo.json not found. Inspect the Plasmo asset mirroring output.")
  }
}
