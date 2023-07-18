import React from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import { X, ThumbsUp, ChevronRight } from "react-feather";
import Image from "@ui/image";
import Button from "@ui/button";
import { ImageType } from "@utils/types";

const BlogModal = ({
    show,
    setShow,
    image,
    title,
    date,
    project_period,
    content,
    website_link,
    id,
    slug,
}) => {
    return (
        <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
        >
            <Modal.Header>
                <Modal.Title
                    id="example-custom-modal-styling-title"
                    className="visually-hidden"
                >
                    Custom Modal Styling
                </Modal.Title>
                <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShow(false)}
                >
                    <span aria-hidden="true">
                        <X />
                    </span>
                </button>
            </Modal.Header>
            <Modal.Body>
                {image?.src && (
                    <Image
                        src={image.src}
                        alt={image?.alt || title}
                        className="img-fluid modal-feat-img"
                    />
                )}

                <div className="row align-items-center">

                    <div className="col-lg-12">
                        <div className="text-content">
                            <div className="news-details">
                                <span className="date">{project_period}</span>
                                <h2 className="title">{title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            </div>
                            <div className="pt--50"></div>
                        </div>
                    </div>
                    {website_link && (
                    <div className="col-lg-12">
                        <div className="text-content">
                            <div className="button-group mt--20">
                                <Button path={website_link}>
                                    <span>VIEW WEBSITE</span>
                                    <ChevronRight />
                                </Button>
                            </div>
                        </div>
                    </div>
                    )}
                </div>


            </Modal.Body>
        </Modal>
    );
};

BlogModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
    image: PropTypes.shape(ImageType).isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    project_period: PropTypes.string,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    website_link: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default BlogModal;
