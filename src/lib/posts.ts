export interface Post {
    id: number;
  slug: string;
  title: string;
  content: string;
}

export const posts : Post[] = [
    {
         id: 1,
  slug: "my-first-post",
  title: "My First Post",
  content: "This is the content of my first blog post."
    },
    {
        id: 2,
    slug: "react-router-guide",
    title: "React Router Guide",
    content: "Learn how dynamic routing works in React Router."
    },
    
    {        
    id: 3,
    slug: "context-api-explained",
    title: "Context API Explained",
    content: "This article explains how to use React Context for global state."
    },

]