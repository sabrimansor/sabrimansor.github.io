import { graphql } from "gatsby";

export const query = graphql`
    fragment Article on Article {
        id
        title
        slug
        category
        project_period
        website_link
        date(formatString: "LL")
        content
        readingTime
        image {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(
                        quality: 100
                        formats: WEBP
                        placeholder: DOMINANT_COLOR
                    )
                }
            }
        }
    }
`;
