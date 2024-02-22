import Image from "next/image";
import styles from "./dynamicPost.module.css";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

// const getData = async (id) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const DynamicBlog = async ({ params }) => {
  const { id } = params;

  const post = await getPost(id);
  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image
            src={post.img}
            alt="Dynamic post image"
            fill
            className={styles.img}
          />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && <PostUser userId={post.userId} />}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default DynamicBlog;
