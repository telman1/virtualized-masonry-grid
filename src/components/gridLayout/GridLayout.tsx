import React, {useEffect, useState} from 'react';
import { createClient } from 'pexels';
const client = createClient('I7bLNHqMksgoy0dfiJbgQAuopLKbGYxR5B3Y2ldnWnXKwEZZQBBvIec4');
import './grid.css'
import {setImageSize} from "../../helpers/helpers.ts";

const GridLayout = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    client.photos.curated({ per_page: 30 }).then(data => {
      setImages(data.photos)
      console.log(data, '------data----');
    });
  }, []);

  return (
    <div className="grid-wrapper">
      {images.map(image => {
        return (
          <div className={setImageSize(image.width, image.height)} key={image.id}>
            <img
              src={image.src.original}
              alt={image.alt} />
          </div>
        )
      })}
    </div>
  );
};

export default GridLayout;