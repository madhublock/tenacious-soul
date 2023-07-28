import GithubSlugger from 'github-slugger'
import type { BlogFrontmatter } from "@content/_schemas";
const slugger = new GithubSlugger()

export const slugifyStr = (str: string) => {
  return slugger.slug(str);
}

const slugify = (post: BlogFrontmatter) =>
  post.postSlug ? slugger.slug(post.postSlug) : slugger.slug(post.title);

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));

export default slugify;
