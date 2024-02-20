import Links from "./links/Links";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>IEEE HIT SB</div>
      <div>
        <Links />
      </div>
    </div>
  );
};

export default Navbar;
