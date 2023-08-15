import Link from "next/link";
import blogData from "../data/blogData.json";

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogData.map((post) => (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
