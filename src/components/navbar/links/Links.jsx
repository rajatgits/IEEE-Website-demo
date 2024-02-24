"use client";

import { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import Image from "next/image";
import { handleLogout } from "@/lib/actions";

const Links = ({ session }) => {
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

  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink title={link.title} path={link.path} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && <NavLink title="Admin" path="/admin" />}
            <form action={handleLogout}>
              <button className={styles.logout}>
                <Image
                  src="/logout.png"
                  alt="Logout image"
                  width={18}
                  height={18}
                />
              </button>
            </form>
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
