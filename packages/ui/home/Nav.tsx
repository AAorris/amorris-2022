import * as React from "react";
import Link from "next/link";
import classnames from "classnames";

import styles from "./Nav.module.css";
import layoutStyles from "ui/home/Layout.module.css";
import classNames from "classnames";

const Nav = (props: { image: JSX.Element }) => {
  return (
    <nav className={styles.nav}>
      <section
        className={classNames(
          styles.gridCenter,
          styles.navContainer,
          layoutStyles.topLevel
        )}
      >
        <a className={styles.brand} href="/">
          <span className={classnames("brandImage", styles.brandImage)}>
            {props.image}
          </span>
          <span>amorris</span>
        </a>
        <div className={classNames(styles.gridCenter, styles.navLinks)}>
          <div className={styles.navItem}>
            <Link href="/">Home</Link>
          </div>
          <div className={styles.navItem}>
            <Link href="/links-tagged">Links</Link>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Nav;
