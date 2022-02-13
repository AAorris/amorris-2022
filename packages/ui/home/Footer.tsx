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
              <a href="mailto:hey@amorris.ca">Email</a>
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
          </ul>
        </section>
        <section>
          <h2>Some Links</h2>
          <ul>
            <li>
              <Link href="/links-tagged/home">#home</Link>
            </li>
            <li>
              <Link href="/links-tagged/web">#web</Link>
            </li>
            <li>
              <Link href="/links-tagged/js">#js</Link>
            </li>
            <li>
              <Link href="/links-tagged/tech">#tech</Link>
            </li>
          </ul>
        </section>
      </nav>
      <h3 className="name">Aaron Morris</h3>
      <div className="bottomRow">
        <p>Made in 🇨🇦 Canada • 2022</p>
        <p>Contact me at hey@amorris.ca</p>
      </div>
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
        .name {
          font-weight: 800;
          letter-spacing: 0;
          font-size: 40px;
          margin-block-end: -25px;
        }
        .bottomRow {
          display: flex;
          justify-content: space-between;
          color: #ccc;
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
