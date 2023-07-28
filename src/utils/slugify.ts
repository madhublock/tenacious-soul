import GithubSlugger from 'github-slugger'
import type { BlogFrontmatter } from "@content/_schemas";


export const slugifyStr = (str: string) => {
  const slugger = new GithubSlugger()
  return slugger.slug(str);
}

const slugify = (post: BlogFrontmatter) =>{
  const slugger = new GithubSlugger()
  return post.postSlug ? slugger.slug(post.postSlug) : slugger.slug(post.title);
}

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
