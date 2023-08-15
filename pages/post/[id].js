import { useRouter } from "next/router";
import styles from "../../styles/post.module.css";
import blogData from "../../data/blogData.json";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((post) => post.id.toString() === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>
      <div className={styles.content}>{post.content}</div>
    </div>
  );
}

export default Post;
