import React, {memo} from 'react';
import {useImages} from "../../context/ImageContext.tsx";
import {UI_TEXT} from "../../helpers/constants.ts";
import './grid.css';
import Card from "../../components/card/Card.tsx";
import Search from "../../components/search/Search.tsx";
import NoDataFound from "../../components/noDataFound/NoDataFound.tsx";

const GridLayout = () => {
  const {images, loading, nextPage, filteredImages} = useImages();

  console.dir(filteredImages, 'filteredImages');
  // console.dir(images, 'images');

  if (!images.length) {
    return <div>{UI_TEXT.LOADING}</div>
  }

  return (
    <>
      <Search />
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