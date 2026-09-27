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
    defineField({ name: "contribution", title: "Ma contribution", type: "text", rows: 4 }),
    defineField({
      name: "metrics", title: "Indicateurs / résultats clés", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "label", title: "Libellé", type: "string" }),
        defineField({ name: "value", title: "Valeur", type: "string" }),
        defineField({ name: "note", title: "Précision", type: "string" }),
      ], preview: { select: { title: "label", subtitle: "value" } } }]
    }),
    defineField({
      name: "sections", title: "Sections détaillées", type: "array",
      of: [{ type: "object", fields: [
        defineField({ name: "number", title: "Numéro", type: "string" }),
        defineField({ name: "title", title: "Titre", type: "string", validation: r => r.required() }),
        defineField({ name: "text", title: "Texte", type: "text", rows: 5 }),
        defineField({ name: "items", title: "Points", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "quote", title: "Citation / question", type: "text", rows: 4 }),
      ], preview: { select: { title: "title", subtitle: "number" } } }]
    }),
    defineField({ name: "published", title: "Visible sur le portfolio", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "title", subtitle: "label" } },
});
