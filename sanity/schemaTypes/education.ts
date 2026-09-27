import { defineField, defineType } from "sanity";

export const education = defineType({
  name: "education",
  title: "Formation",
  type: "document",
  fields: [
    defineField({ name: "order", title: "Ordre", type: "number", validation: r => r.required().integer().min(1) }),
    defineField({ name: "period", title: "Période", type: "string", validation: r => r.required() }),
    defineField({ name: "school", title: "Établissement", type: "string", validation: r => r.required() }),
    defineField({ name: "location", title: "Lieu", type: "string" }),
    defineField({ name: "degree", title: "Diplôme", type: "string", validation: r => r.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
    defineField({ name: "tags", title: "Domaines", type: "array", of: [{ type: "string" }] }),
  ],
  preview: { select: { title: "degree", subtitle: "school" } },
});
