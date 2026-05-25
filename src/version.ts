import { readFileSync } from "node:fs";
import { join } from "node:path";

// Resolved at build time (server-only — never import into client code).
function readVersion(relPath: string): string {
  try {
    const pkg = JSON.parse(readFileSync(join(process.cwd(), relPath), "utf8"));
    return typeof pkg.version === "string" ? pkg.version : "unknown";
  } catch {
    return "unknown";
  }
}

/** This demo site's version (astro-demo/package.json). */
export const demoVersion = readVersion("package.json");

/** The installed @vocasync/astro version (whatever this build resolved). */
export const pluginVersion = readVersion("node_modules/@vocasync/astro/package.json");
