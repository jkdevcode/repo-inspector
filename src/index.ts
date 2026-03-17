#!/usr/bin/env node

import { Command } from "commander";

const program = new Command();

program
  .name("repo-inspector")
  .description("Analyze your project with AI")
  .version("0.0.1");

program
  .command("analyze")
  .description("scan project")
  .action(() => {
    console.log("Scanning project...");
  });

program.parse();
