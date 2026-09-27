import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Profil & site",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Nom", type: "string" }),
    defineField({ name: "headline", title: "Titre professionnel", type: "string" }),
    defineField({ name: "heroLine", title: "Signature du hero", type: "string" }),
    defineField({ name: "heroDescription", title: "Introduction", type: "text", rows: 3 }),
    defineField({ name: "about", title: "À propos", type: "text", rows: 6 }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "githubUrl", title: "GitHub", type: "url" }),
    defineField({ name: "linkedinUrl", title: "LinkedIn", type: "url" }),
  ],
});
