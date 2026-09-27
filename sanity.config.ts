"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { PortfolioImporter } from "./sanity/PortfolioImporter";

export default defineConfig({
  name: "default",
  title: "Elie Sanon Portfolio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  tools: (prev) => [...prev, { name: "import-portfolio", title: "Importer le contenu", component: PortfolioImporter }],
  schema: { types: schemaTypes },
});
