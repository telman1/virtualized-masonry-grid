import { setImageSize } from "../../helpers/helpers.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "../../helpers/constants.ts";
import { memo } from "react";
import {Image} from "../../types/types.ts";

interface CardProps {
  image: Image;
}
const Card = ({ image } : CardProps) => {
  if (!image?.src?.large) return null;

  return (
    <div className={setImageSize(image.width, image.height)}>
      <Link to={ROUTES.getGridItemPath(image.id)} className="grid-image">
        <div className="grid-image-name">{image.photographer}</div>
        <img
          className="grid-image"
          src={image.src.large}
          alt={image.alt || "Image"}
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default memo(Card);
