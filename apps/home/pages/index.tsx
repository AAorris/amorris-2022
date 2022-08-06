import { clsx } from "clsx";
import { NextSeo } from "next-seo";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useTab, useTabList, useTabPanel } from "react-aria";
import { Item, useTabListState } from "react-stately";
import portrait from "../public/portrait.jpg";
import render from "../public/render.jpg";
import vercelLogo from "../public/vercel-logotype-light.svg";
import aria from "../styles/aria.module.css";
import core from "../styles/core.module.css";
import styles from "../styles/Home.module.css";

function Nav(props) {
  let state = useTabListState(props);
  let ref = useRef();
  const { tabListProps } = useTabList(props, state, ref);
  return (
    <nav className={clsx(props.outer, aria.nav)}>
      <div
        className={clsx(styles.tabs, core.row, core.shrink, aria.tabs)}
        {...tabListProps}
        ref={ref}
      >
        {Array.from(state.collection).map((item) => (
          <Tab
            key={item.key}
            item={item}
            state={state}
            orientation={props.orientation}
          />
        ))}
      </div>
      <TabPanel key={state.selectedItem?.key} state={state} />
    </nav>
  );
}

function Tab({ item, state, orientation }) {
  let { key, rendered } = item;
  let ref = useRef();
  let { tabProps, isSelected, isDisabled } = useTab({ key }, state, ref);
  return (
    <div className={clsx(styles.tab, aria.tab)} {...tabProps} ref={ref}>
      {rendered}
    </div>
  );
}

function TabPanel({ state, ...props }) {
  let ref = useRef();
  let { tabPanelProps } = useTabPanel(props, state, ref);
  return (
    <div className={styles.tabPanel} {...tabPanelProps} ref={ref}>
      {state.selectedItem?.props.children}
    </div>
  );
}

export default function Home() {
  return (
    <div className={clsx(core.page, aria.page, styles.container)}>
      <NextSeo
        title="Aaron Morris"
        description="Software engineer at Vercel"
        canonical="https://www.amorris.ca"
        twitter={{
          handle: "@aaorris",
          site: "https://www.amorris.ca",
          cardType: "summary_large_image",
        }}
      />

      <main className={styles.main}>
        <Nav>
          <Item key="morris" title="Morris">
            <h1>Aaron Morris</h1>
            <p>Husband, father, 28</p>
            <ul>
              {[
                <Link key="tw" href="https://twitter.com/aaorris">
                  On Twitter @AAorris
                </Link>,
                <Link key="li" href="https://linkedin.com/in/aaorris">
                  On LinkedIn @AAorris
                </Link>,
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Image placeholder="blur" src={portrait} alt="Picture of me" />
          </Item>
          <Item key="codes" title="Codes">
            <h1>I write code</h1>
            <div className={core.row}>
              <p>Software engineer at</p>
              <Link
                href="https://vercel.com"
                style={{
                  width: 80,
                  padding: "2px 4px",
                  borderRadius: 10,
                  marginLeft: -5,
                  marginBottom: -5,
                  paddingTop: 5,
                }}
              >
                <Image alt="Vercel" src={vercelLogo} />
              </Link>
            </div>
            <ul>
              {[
                <Link key="gh" href="https://github.com/aaorris">
                  On Github @AAorris
                </Link>,
                <Link key="lk" href="https://links.morris.codes/">
                  I share my bookmarks at links.morris.codes
                </Link>,
              ].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <Image placeholder="blur" src={render} alt="A recent test render" />
          </Item>
        </Nav>
      </main>
    </div>
  );
}
