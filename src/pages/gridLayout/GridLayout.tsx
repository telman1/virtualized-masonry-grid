import React, {memo} from 'react';
import {useImages} from "../../context/ImageContext.tsx";
import {UI_TEXT} from "../../helpers/constants.ts";
import Card from "../../components/card/Card.tsx";
import NoDataFound from "../../components/noDataFound/NoDataFound.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";

const GridLayout = () => {
  const {images, loading, nextPage, filteredImages} = useImages();

  console.dir(filteredImages, 'filteredImages');
  // console.dir(images, 'images');

  if (!images.length) {
    return <div>{UI_TEXT.LOADING}</div>
  }

  return (
    <>
      <Navbar />
      {!filteredImages.length ? <NoDataFound /> : (
        <>
          <div className="grid-wrapper">
            {filteredImages.map(image => {
              return (
                <Card key={image.id} image={image}/>
              )
            })}
          </div>
          <button onClick={nextPage}>{UI_TEXT.LOAD_MORE}</button>
        </>
      )}
    </>
  );
};

export default memo(GridLayout);