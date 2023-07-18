import React from "react";
import PropTypes from "prop-types";
import cn from "clsx";
import { ItemType } from "@utils/types";

const TimelineCard = ({ title, subtitle, rating, items, className, layout }) => {
    return (
        <div className={cn("resume-single-list", className)}>
            <div
                className={cn(
                    "inner",
                    layout === 2 &&  "" // "psudo-after-none psudo-after-none"
                )}
            >
                <div className="heading">
                    <div className="title">
                        <h4>{title}</h4>
                        <span>{subtitle}</span>
                    </div>
                    {rating && (
                        <div className="date-of-time">
                            <span>{rating}</span>
                        </div>
                    )}
                </div>
                {items?.map((line) => (
                    <p className="description">{line.description}</p>
                ))}
            </div>
        </div>
    );
};

TimelineCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    rating: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape(ItemType)),
    className: PropTypes.string,
    layout: PropTypes.oneOf([1, 2]),
};

TimelineCard.defaultProps = {
    layout: 1,
};

export default TimelineCard;
