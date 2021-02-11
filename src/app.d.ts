declare namespace App {
  interface BlogPost {
    data: {
      title: string;
      published_at: string;
      excerpt: string;
      slug: string;
      author: string;
    };
    content: string;
  }
}
