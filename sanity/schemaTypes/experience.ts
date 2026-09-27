import { defineField, defineType } from "sanity";

export const experience = defineType({
  name: "experience",
  title: "Expériences",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Ordre", type: "number", validation: r => r.required().integer().min(1) }),
    defineField({ name: "role", title: "Poste", type: "string", validation: r => r.required() }),
    defineField({ name: "company", title: "Entreprise", type: "string", validation: r => r.required() }),
    defineField({ name: "location", title: "Lieu", type: "string" }),
    defineField({ name: "period", title: "Période", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "company" }, validation: r => r.required() }),
    defineField({ name: "summary", title: "Résumé", type: "text", rows: 3 }),
    defineField({ name: "category", title: "Catégorie", type: "string" }),
    defineField({ name: "stack", title: "Stack", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "highlights", title: "Points clés", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "contribution", title: "Ma contribution", type: "text", rows: 4 }),
    defineField({ name: "published", title: "Visible sur le portfolio", type: "boolean", initialValue: true }),
  ],
  preview: { select: { title: "role", subtitle: "company" } },
});
