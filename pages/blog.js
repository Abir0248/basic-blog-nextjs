import Link from "next/link";
import fs from "fs";
import path from "path";
import styles from "../styles/blog.module.css";

function Blog({ posts }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Blog Posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} passHref legacyBehavior>
              <a className={styles.postTitle}>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "blogData.json");

  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
