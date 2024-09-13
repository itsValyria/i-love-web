// src/routes/[id]/+page.server.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { parse } from 'marked';

interface LoadParams {
  id: string;
}

export async function load({ params }: { params: LoadParams }) {
  const { id } = params;
  const postsDirectory = path.resolve('src/lib/posts');
  const filePath = path.join(postsDirectory, `${id}.md`);
  
  try {
    if (!fs.existsSync(filePath)) {
      return {
        status: 404,
        error: 'Post not found' // Return a simple string error
      };
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    const htmlContent = parse(content);

    return {
      post: {
        title: data.title,
        date: data.date,
        content: htmlContent
      }
    };
  } catch (error) {
    console.error('Error loading post:', error);
    return {
      status: 500,
      error: 'Internal Server Error' // Return a simple string error
    };
  }
}