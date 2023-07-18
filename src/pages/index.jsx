import * as React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { normalizedData } from "@utils";
import Layout from "@layout";
import Footer from "@layout/footer";
import HeaderImage from "@containers/header-image";
import Bio from "@containers/bio";
import Blog from "@containers/blog";

const IndexPage = ({ data }) => {
    const content = normalizedData(data?.homePage?.content || []);

    return (
        <Layout
            pageTitle="Home"
            color={2}
            className="white-version index-home"
        >
            <main className="main-page-wrapper">
                <HeaderImage data={content["header-image-section"]} />
                <div className="rn-content-wrapper">
                    <div className="container">
                        <Bio
                            data={{
                                ...content["bio-section"],
                                socials: data.site.siteMetadata.socials,
                            }}
                        />
                    </div>
                    <div className="container">
                        <div className="row mt--0">
                            <div className="col-lg-12">
                                <Blog
                                    data={{
                                        ...content["blog-section"],
                                        blogs: data?.allArticle?.nodes,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer data={{ ...data.footer }} />
        </Layout>
    );
};

export const query = graphql`
    query IndexWhitePageQuery {
        site {
            ...Site
        }
        footer: general(section: { eq: "footer-section" }) {
            ...Footer
        }
        homePage(title: { eq: "index-home" }) {
            content {
                ...Content
            }
        }
        allArticle(limit: 100) {
            nodes {
                ...Article
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        site: PropTypes.shape({
            siteMetadata: PropTypes.shape({
                socials: PropTypes.arrayOf(PropTypes.shape({})),
                contact: PropTypes.shape({
                    phone: PropTypes.string,
                    email: PropTypes.string,
                }),
                getform_url: PropTypes.string,
            }),
        }),
        homePage: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        navigation: PropTypes.shape({}),
        header: PropTypes.shape({}),
        footer: PropTypes.shape({}),
    }),
};

export default IndexPage;
