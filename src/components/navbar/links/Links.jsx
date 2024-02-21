"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Officers",
      path: "/officers",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink title={link.title} path={link.path} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink title="Admin" path="/admin" />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink title="Login" path="/login" />
        )}
      </div>
      <button
        className={styles.menubutton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>
          ME
          <br />
          NU
        </span>
      </button>
      {open && (
        <div className={styles.mobilelinks}>
          {links.map((link) => (
            <NavLink title={link.title} path={link.path} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
