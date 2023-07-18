import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "@components/section-title";
import BlogCard from "@components/blog-card";
import { SectionTitleType, BlogType } from "@utils/types";

const BlogArea = ({ data, id }) => {
    return (
        <div className="rn-blog-area rn-section-gap" id={id}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {data?.section_title && (
                            <SectionTitle
                                {...data.section_title}
                                align="center"
                                data-aos="fade-up"
                                data-aos-duration="500"
                                data-aos-delay="500"
                                data-aos-once="true"
                            />
                        )}
                    </div>
                </div>
                <div className="row row--25 mt--30 mt_md--10 mt_sm--10">
                    {data?.blogs?.reverse().map((blog) => (
                        <div
                            key={blog.slug}
                            data-aos="fade-up"
                            data-aos-duration="500"
                            data-aos-delay="400"
                            data-aos-once="true"
                            className="col-lg-6 col-xl-4 mt--30 col-md-6 col-sm-6 col-6 mt--30"
                        >
                            <BlogCard
                                title={blog.title}
                                category={blog.category}
                                project_period={blog.project_period}
                                image={blog.image}
                                date={blog.date}
                                content={blog.content}
                                website_link={blog.website_link}
                                readingTime={blog.readingTime}
                                slug={blog.slug}
                                id={blog.id}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

BlogArea.propTypes = {
    id: PropTypes.string,
    data: PropTypes.shape({
        section_title: PropTypes.shape(SectionTitleType),
        blogs: PropTypes.arrayOf(PropTypes.shape(BlogType)),
    }),
};

BlogArea.defaultProps = {
    id: "blog",
};

export default BlogArea;
