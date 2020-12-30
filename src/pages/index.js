import * as React from "react";
import { Header } from "../components/layout";
import { Link } from "gatsby";

// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => (
      <Link key={edge.node.id} to={edge.node.frontmatter.slug}>
        {edge.node.frontmatter.title} ({edge.node.frontmatter.date})
      </Link>
    ));
  return (
    <>
      <Header />
      <main>
        <title>Andrew Jones</title>
        {Posts}
      </main>
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
