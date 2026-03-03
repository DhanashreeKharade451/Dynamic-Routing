import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

const BlogIndex =() => {
return(
    <div>
        <h1>Blog Post</h1>
        {
            posts.map((post) => (
                <div key={post.id}> 
                  <Link to = {`/blog/${post.slug}`}>
                  <h2>{post.title}</h2>
                  </Link>
                </div>
            ))}       
    </div>
);
};

export default BlogIndex;