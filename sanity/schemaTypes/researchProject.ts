import { defineField, defineType } from "sanity";

export const researchProject = defineType({
  name: "researchProject",
  title: "Projets de recherche",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Ordre", type: "number", validation: r => r.required().integer().min(1) }),
    defineField({ name: "title", title: "Titre", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: r => r.required() }),
    defineField({ name: "label", title: "Domaine", type: "string" }),
    defineField({ name: "question", title: "Question de recherche", type: "text", rows: 3 }),
    defineField({ name: "summary", title: "Résumé", type: "text", rows: 4 }),
    defineField({ name: "tags", title: "Technologies / méthodes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "githubUrl", title: "GitHub", type: "url" }),
    defineField({ name: "year", title: "Année", type: "string" }),
    defineField({ name: "institution", title: "Institution", type: "string" }),
    defineField({ name: "published", title: "Visible sur le portfolio", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "label" } },
});
