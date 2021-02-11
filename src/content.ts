import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export function readMDXFile(filePath: string) {
  const fileData = fs.readFileSync(filePath);

  const parsedData = matter(fileData);

  return parsedData;
}

export function readBlogPosts(): App.BlogPost[] {
  const dir = path.join(process.cwd(), 'content/blog_posts');

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));

  const posts: App.BlogPost[] = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const parsedData = readMDXFile(filePath);
    const { data, content } = parsedData;

    posts.push({
      data: data as App.BlogPost['data'],
      content,
    });
  }

  return posts;
}

export function readTeamMembers(): App.TeamMember[] {
  const dir = path.join(process.cwd(), 'content/team_members');

  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));

  const teamMembers = [];

  for (const file of files) {
    const filePath = path.join(dir, file);
    const parsedData = readMDXFile(filePath);

    teamMembers.push(parsedData.data as App.TeamMember);
  }

  return teamMembers;
}
