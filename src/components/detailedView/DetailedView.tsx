import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {createClient} from 'pexels';
const client = createClient('I7bLNHqMksgoy0dfiJbgQAuopLKbGYxR5B3Y2ldnWnXKwEZZQBBvIec4');
import './detail-view.css'
import {calculateImageContainerSize} from "../../helpers/helpers.ts";
import {UI_TEXT} from "../../helpers/constants.ts";

const DetailedView = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const [imageData, setImageData] = useState<null | object>(null);
  const containerSize = calculateImageContainerSize(
    { width: imageData?.width, height: imageData?.height },
    { width: window.innerWidth * 0.9, height: window.innerHeight * 0.8 }
  );
  useEffect(() => {
    client.photos.show({ id: imageId }).then(img => {
      setImageData(img)
    });
  }, []);

  // console.log(containerSize, 'containerSize');

  if (!imageData) {
    return <div>{UI_TEXT.LOADING}</div>
  }

  return (
    <div className='image-detail-view'
         style={{
           maxWidth: containerSize.width,
           maxHeight: containerSize.height,
         }}
    >
      <button onClick={() => navigate(-1)}>{UI_TEXT.BACK_BUTTON}</button>
      <h2>{imageData.alt}</h2>
      <h3>Photographer - {imageData.photographer}</h3>
      <img
        src={imageData.src.large2x}
        alt={imageData.alt}
      />
    </div>
  );
};

export default DetailedView;