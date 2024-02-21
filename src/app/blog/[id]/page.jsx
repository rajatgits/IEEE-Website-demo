import Image from "next/image";
import styles from "./dynamicPost.module.css";

const DynamicBlog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg"
          alt="Dynamic post image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1191710/pexels-photo-1191710.jpeg"
            alt="Avatar image"
            className={styles.avatar}
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Rajat Raj</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>Date</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum rerum
          mollitia ducimus tenetur, cupiditate error, sed aspernatur assumenda
          aperiam numquam possimus aut placeat pariatur omnis ratione ipsam
          veniam officia velit?
        </div>
      </div>
    </div>
  );
};

export default DynamicBlog;
