import { readFileSync } from "fs";
import { join } from "path";

export const stackAnalyzer = {
  id: "stack",

  async analyze() {
    try {
      const path = join(process.cwd(), "package.json");
      const file = readFileSync(path, "utf-8");
      const pkg = JSON.parse(file);

      const dependencies = {
        ...pkg.dependencies,
        ...pkg.devDependencies,
      };

      const detected: string[] = [];

      // detecciones básicas
      if (dependencies.react) detected.push("React");
      if (dependencies.next) detected.push("Next.js");
      if (dependencies.express) detected.push("Express");
      if (dependencies.nestjs) detected.push("NestJS");
      if (dependencies.vue) detected.push("Vue");

      return {
        id: "stack",
        summary:
          detected.length > 0
            ? `Detected stack: ${detected.join(", ")}`
            : "No specific stack detected",
        metrics: {
          technologiesDetected: detected.length
        },
        warnings: detected.length === 0 ? ["No main frameworks detected in package.json."] : [],
        data: detected,
      };
    } catch {
      return {
        id: "stack",
        summary: "Could not detect stack",
        metrics: { technologiesDetected: 0 },
        warnings: ["Package.json not found or unreadable."],
        data: [],
      };
    }
  },
};