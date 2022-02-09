import * as React from "react";
import Link from "next/link";
import classnames from "classnames";
import layoutStyles from "ui/home/Layout.module.css";

const Footer = () => {
  return (
    <footer className={classnames(layoutStyles.topLevel)}>
      <nav
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          borderBottom: "1px solid rgb(0 0 0 / 6%)",
        }}
      >
        <section>
          <h2>About Me</h2>
          <ul>
            <li>
              <a href="mailto:aaorris@gmail.com">Email</a>
            </li>
            <li>
              <a href="https://www.google.com/maps/place/Ontario/">Location</a>
            </li>
            <li>
              <a href="https://calendly.com/aaronmichaelmorris/30min">
                Calendar
              </a>
            </li>
            <li>
              <a href="/resume.pdf">Resume</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Social Media</h2>
          <ul>
            <li>
              <a href="https://twitter.com/AAorris">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/AAorris">GitHub</a>
            </li>
            <li>
              <a href="https://linkedin.com/in/AAorris">LinkedIn</a>
            </li>
            <li>
              <a href="https://www.instagram.com/amorrisa/">Instagram</a>
            </li>
          </ul>
        </section>
        <section>
          <h2>Link Collection</h2>
          <ul>
            <li>
              <Link href="/links-tagged/tech">Tech Links</Link>
            </li>
            <li>
              <Link href="/links-tagged/web">Web Links</Link>
            </li>
            <li>
              <Link href="/links-tagged/home">Home Links</Link>
            </li>
            <li>
              <Link href="/links-tagged/js">JS Links</Link>
            </li>
            <li>
              <Link href="/links-tagged/ml">ML Links</Link>
            </li>
            <li>
              <Link href="/links-tagged/life">Life Links</Link>
            </li>
          </ul>
        </section>
      </nav>
      <h3>Aaron Morris</h3>
      <p>Full stack engineer • 2022 • 🇨🇦 Canada</p>
      <style jsx>{`
        ul {
          display: grid;
          gap: 10px;
          list-style-type: none;
          padding-inline-start: 0px;
        }
        section {
          margin: 10px;
          padding: 10px 20px;
        }
        section > h3 {
          margin-block-start: 0;
        }
        section:focus-within {
          outline: 2px solid #ddd;
          border-radius: 5px;
        }
        @media (max-width: 400px) {
          nav {
            display: flex;
            flex-direction: column;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
