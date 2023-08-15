import Link from "next/link";
import styles from "../styles/home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to My Blog!</h1>
      <Link href="/blog" passHref legacyBehavior>
        <a className={styles.link}>Go to Blog</a>
      </Link>
    </div>
  );
}

export default Home;
