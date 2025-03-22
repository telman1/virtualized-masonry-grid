import React from 'react';
import {setImageSize} from "../../helpers/helpers.ts";
import {Link} from "react-router-dom";
import {ROUTES} from "../../helpers/constants.ts";

const Card = ({image}) => {
  return (
    <div className={setImageSize(image.width, image.height)} key={image.id}>
      <Link to={ROUTES.getGridItemPath(image.id)} className='grid-image'>
        <div className='grid-image-name'>{image.photographer}</div>
        <img
          className='grid-image'
          src={image.src.large}
          alt={image.alt}/>
      </Link>
    </div>
  );
};

export default Card;