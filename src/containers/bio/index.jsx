import React from "react";
import PropTypes from "prop-types";
import Image from "@ui/image";
import Social, { SocialLink } from "@ui/social";
import Icon from "@ui/icon";
import { HeadingType, TextType, ImageType, SocialType } from "@utils/types";

const BioArea = ({ data }) => {
    return (
        <div className="row padding-tb m_dec-top align-items-center d-flex">
            <div className="col-lg-6">
                <div className="header-left">
                    <div className="header-thumbnail">
                        {data?.images?.[0]?.src && (
                            <Image
                                src={data.images[0].src}
                                alt={data.images[0]?.alt || "Bio"}
                            />
                        )}
                    </div>

                    <div className="header-info-content">
                        {data?.headings?.[0] && (
                            <h4 className="title">
                                {data.headings[0]?.content}
                            </h4>
                        )}
                        {data?.headings?.[1] && (
                            <div className="status-info">
                                {data.headings[1]?.content}
                                <br/>{data.headings[2]?.content}
                            </div>
                        )}
                        {data?.socials && (
                            <div className="social-share-style-1 border-none mt--40">
                                <Social>
                                        {data.socials[0].path && (
                                            <SocialLink path={data.socials[0].path}>
                                                <svg class="feather feather-github icon-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <title>github</title>
                                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                                </svg>
                                            </SocialLink>
                                        )}
                                        {data.socials[1].path && (
                                            <SocialLink path={data.socials[1].path}>
                                                <svg class="feather feather-facebook icon-facebook" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <title>facebook</title>
                                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                </svg>
                                            </SocialLink>
                                        )}
                                        {data.socials[2].path && (
                                            <SocialLink path={data.socials[2].path}>
                                                <svg class="feather feather-linkedin icon-linkedin" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <title>LinkedIn</title>
                                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                    <rect x="2" y="9" width="4" height="12"></rect>
                                                    <circle cx="4" cy="4" r="2"></circle>
                                                </svg>
                                            </SocialLink>
                                        )}
                                </Social>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="header-right">
                    <ul className="rn-header-content">
                        {data?.texts?.[0] && (
                            <li>
                                <span className="overhead">ABOUT ME</span>
                                {data.texts[0]?.content}
                            </li>
                        )}
                        {data?.texts?.[1] && (
                            <li>
                                {data.texts[1]?.content}
                            </li>
                        )}
                        {data?.texts?.[2] && (
                            <li>
                                {data.texts[2]?.content}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

BioArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(PropTypes.shape(HeadingType)),
        texts: PropTypes.arrayOf(PropTypes.shape(TextType)),
        images: PropTypes.arrayOf(PropTypes.shape(ImageType)),
        socials: PropTypes.arrayOf(PropTypes.shape(SocialType)),
    }),
};

export default BioArea;
