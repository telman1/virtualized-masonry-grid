import React, {memo} from 'react';
import {setImageSize} from "../../helpers/helpers.ts";
import {Link} from "react-router-dom";
import {useImages} from "../../context/ImageContext.tsx";
import {UI_TEXT, ROUTES} from "../../helpers/constants.ts";
import './grid.css';

const GridLayout = () => {
  const {images, loading, nextPage} = useImages();

  console.dir(images, 'images');
  if (!images.length) {
    return <div>{UI_TEXT.LOADING}</div>
  }

  return (
    <>
      <div className="grid-wrapper">
        {images.map(image => {
          return (
            <div className={setImageSize(image.width, image.height)} key={image.id}>
              <Link to={ROUTES.getGridItemPath(image.id)} className='grid-image'>
                <img
                  className='grid-image'
                  src={image.src.large}
                  alt={image.alt}/>
              </Link>
            </div>
          )
        })}
      </div>
      <button onClick={nextPage}>{UI_TEXT.LOAD_MORE}</button>
    </>
  );
};

export default memo(GridLayout);