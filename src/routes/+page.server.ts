// src/routes/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function load() {
  const postsDirectory = path.resolve('src/lib/posts');

  try {
    const filenames = fs.readdirSync(postsDirectory);
    const posts = filenames.map(filename => {
      const filePath = path.join(postsDirectory, filename);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        id: filename.replace(/\.md$/, ''), // Extract id from filename
        title: data.title,
        date: data.date
      };
    });

    return {
      posts
    };
  } catch (error) {
    console.error('Error loading posts:', error);
    return {
      status: 500,
      error: 'Internal Server Error'
    };
  }
}
