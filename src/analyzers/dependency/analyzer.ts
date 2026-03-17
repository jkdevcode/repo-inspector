import { readFileSync } from "fs";
import { join } from "path";

export const dependencyAnalyzer = {
  id: "dependency",

  async analyze() {
    try {
      const path = join(process.cwd(), "package.json");
      const file = readFileSync(path, "utf-8");
      const pkg = JSON.parse(file);

      const deps = Object.keys(pkg.dependencies || {});
      const devDeps = Object.keys(pkg.devDependencies || {});

      return {
        id: "dependency",
        summary: `Found ${deps.length} dependencies and ${devDeps.length} dev dependencies`,
        data: { deps, devDeps },
      };
    } catch (error) {
      return {
        id: "dependency",
        summary: "No package.json found",
        data: {},
      };
    }
  },
};