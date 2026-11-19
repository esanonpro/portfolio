"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { DetailContentMigrator } from "./sanity/DetailContentMigrator";

export default defineConfig({
  name: "default",
  title: "Elie Sanon Portfolio",
  basePath: "/studio",
  projectId,
  dataset,
  plugins: [structureTool()],
  tools: (prev) => [...prev, {name:"migrate-details",title:"Migrer les pages détaillées",component:DetailContentMigrator}],
  schema: { types: schemaTypes },
});
