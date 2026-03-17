#!/usr/bin/env node

import { Command } from "commander";
import { runAnalysis } from "../core/engine";

const program = new Command();

program
  .name("repo-inspector")
  .description("Analyze your project with AI")
  .version("0.0.1");

program
  .command("analyze")
  .option("-f, --format <format>", "console | json | markdown", "console")
  .action(async (options) => {
    await runAnalysis({
      format: options.format
    });
  });

program.parse();
