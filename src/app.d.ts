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

  interface TeamMember {
    name: string;
    bio: string;
    avatar: string;
    social: {
      url: string;
    }[];
    founder?: boolean;
  }
}
