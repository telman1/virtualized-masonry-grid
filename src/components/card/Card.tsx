import { setImageSize } from "@/helpers/helpers.ts";
import { Link } from "react-router-dom";
import { ROUTES } from "@/helpers/constants.ts";
import { memo } from "react";
import {ImageInterface} from "@/types/types.ts";

interface CardProps {
  image: ImageInterface;
}
const Card = ({ image } : CardProps) => {
  if (!image?.src?.large) return null;

  return (
    <div className={setImageSize(image.width, image.height)}>
      <Link to={ROUTES.getGridItemPath(image.id)} className="grid-image">
        <div className="grid-image-name">{image.photographer}</div>
        <picture>
          <img
            className="grid-image"
            src={image.src.large}
            alt={image.alt || "Image"}
            loading="lazy"
          />
        </picture>
      </Link>
    </div>
  );
};

export default memo(Card);
