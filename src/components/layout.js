import React, { useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "prof_pic_sanfran.jpg" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  useEffect(() => {
    const headerColorController = () => {
      const header = document.getElementsByTagName("header")[0];
      if (header.className.includes("pink")) {
        header.classList.remove("pink");
        header.classList.add("blue");
      } else if (header.className.includes("blue")) {
        header.classList.remove("blue");
      } else {
        header.classList.add("pink");
      }
    };

    let shouldExpand = true;
    const headerWidthController = () => {
      const header = document.getElementsByTagName("header")[0];
      if (header.className.includes("expand")) {
        header.classList.remove("expand");
      } else if (header.className.includes("contract")) {
        header.classList.remove("contract");
      } else if (shouldExpand) {
        header.classList.add("expand");
        shouldExpand = false;
      } else if (!shouldExpand) {
        header.classList.add("contract");
        shouldExpand = true;
      }
    };

    window.setInterval(headerColorController, 2000);
    window.setInterval(headerWidthController, 1750);

    return () => {
      window.clearInterval(headerColorController);
      window.clearInterval(headerWidthController);
    };
  });

  return (
    <header>
      <span className="img-border">
        <Img
          className="headshot"
          fixed={data.file.childImageSharp.fixed}
          alt="headshot"
          style={{
            overflow: "unset !important",
            marginRight: "15px",
            height: "60px",
            width: "60px",
          }}
        />
      </span>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "black",
          "&:hover": { color: "red" },
        }}
      >
        <h1>Andrew E. Jones</h1>
      </Link>
      <div id="tagline"> Insert a tagline here</div>
    </header>
  );
};
