import { useRouter } from "next/router";
import blogData from "../data/blogData.json";

function Post() {
  const router = useRouter();
  const { id } = router.query;
  const post = blogData.find((item) => item.id === parseInt(id, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}

export default Post;
