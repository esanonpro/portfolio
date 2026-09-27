import { client } from "./client";

export type SiteSettings = {
  name?: string; headline?: string; heroLine?: string; heroDescription?: string;
  about?: string; email?: string; githubUrl?: string; linkedinUrl?: string;
};
export type Experience = {
  _id:string; order:number; role:string; company:string; location?:string; period:string;
  slug:{current:string}; summary?:string; category?:string; stack?:string[];
  highlights?:string[]; contribution?:string; detailIntro?:string; sections?: DetailSection[];
};
export type Education = {
  _id:string; order:number; period:string; school:string; location?:string;
  degree:string; description?:string; tags?:string[];
};
export type DetailSection = { number?:string; title:string; text?:string; items?:string[]; quote?:string };
export type ResearchProject = {
  _id:string; order:number; title:string; slug:{current:string}; label?:string;
  question?:string; summary?:string; tags?:string[]; githubUrl?:string; year?:string; institution?:string;
  contribution?:string; metrics?:{label?:string;value?:string;note?:string}[]; sections?:DetailSection[];
};

export async function getHomeContent(){
  try {
    return await client.fetch<{
      settings: SiteSettings | null;
      experiences: Experience[];
      education: Education[];
      research: ResearchProject[];
    }>(`{
      "settings": *[_type == "siteSettings"][0]{name,headline,heroLine,heroDescription,about,email,githubUrl,linkedinUrl},
      "experiences": *[_type == "experience" && published == true] | order(order asc){_id,order,role,company,location,period,slug,summary,category,stack,highlights,contribution},
      "education": *[_type == "education"] | order(order asc){_id,order,period,school,location,degree,description,tags},
      "research": *[_type == "researchProject" && published == true] | order(order asc){_id,order,title,slug,label,question,summary,tags}
    }`, {}, { next: { revalidate: 60 } });
  } catch {
    return {settings:null,experiences:[],education:[],research:[]};
  }
}

export async function getExperienceBySlug(slug:string){
  try { return await client.fetch<Experience | null>(
    `*[_type=="experience" && slug.current==$slug && published==true][0]{_id,order,role,company,location,period,slug,summary,category,stack,highlights,contribution,detailIntro,sections}`,
    {slug}, {next:{revalidate:60}}
  ); } catch { return null; }
}

export async function getResearchBySlug(slug:string){
  try { return await client.fetch<ResearchProject | null>(
    `*[_type=="researchProject" && slug.current==$slug && published==true][0]{_id,order,title,slug,label,question,summary,tags,githubUrl,year,institution,contribution,metrics,sections}`,
    {slug}, {next:{revalidate:60}}
  ); } catch { return null; }
}
