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
      
      const totalDeps = deps.length + devDeps.length;
      
      const warnings: string[] = [];
      if (totalDeps > 50) {
        warnings.push("High number of dependencies might impact install time and bundle size.");
      }
      
      if (pkg.dependencies && pkg.dependencies["typescript"]) {
         warnings.push("TypeScript is installed as a regular dependency instead of devDependency.");
      }

      return {
        id: "dependency",
        summary: `Found ${deps.length} dependencies and ${devDeps.length} dev dependencies`,
        metrics: {
          totalDependencies: totalDeps,
          prodDependencies: deps.length,
          devDependencies: devDeps.length
        },
        warnings,
        data: { deps, devDeps },
      };
    } catch (error) {
      return {
        id: "dependency",
        summary: "No package.json found",
        metrics: { totalDependencies: 0, prodDependencies: 0, devDependencies: 0 },
        warnings: ["Missing package.json"],
        data: {},
      };
    }
  },
};