import React, { useState } from "react";
import PropTypes from "prop-types";
import { Clock, ArrowUpRight } from "react-feather";
import BlogModal from "@components/modal-blog";
import { ImageType } from "@utils/types";
import Image from "@ui/image";

const BlogCard = ({
    title,
    category,
    project_period,
    image,
    date,
    content,
    website_link,
    readingTime,
    id,
    slug,
}) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div
                className="rn-blog"
                onClick={() => setShow(true)}
                onKeyPress={() => setShow(true)}
                role="button"
                tabIndex="-1"
            >
                <div className="inner">
                    <div className="thumbnail">
                        <a href="#!">
                            <Image src={image.src} alt={image.alt || title} />
                        </a>
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <a href="#!">{category}</a>
                            </div>
                        </div>
                        <h4 className="title">
                            <a href="#!">
                                {title}
                                <ArrowUpRight />
                            </a>
                        </h4>
                        <div className="category-list">
                            <p style={{fontSize: '1.4rem'}}>{project_period}</p>
                        </div>
                    </div>
                </div>
            </div>
            <BlogModal
                show={show}
                setShow={setShow}
                title={title}
                date={date}
                project_period={project_period}
                image={image}
                content={content}
                slug={slug}
                website_link={website_link}
                id={id}
            />
        </>
    );
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    project_period: PropTypes.string.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    website_link: PropTypes.string.isRequired,
    readingTime: PropTypes.string,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default BlogCard;
