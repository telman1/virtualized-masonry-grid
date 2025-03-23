import { useImages } from "../../context/ImageContext.tsx";
import { UI_TEXT } from "../../helpers/constants.ts";
import Card from "../../components/card/Card.tsx";
import NoDataFound from "../../components/noDataFound/NoDataFound.tsx";
import Navbar from "../../components/navbar/Navbar.tsx";
import Loading from "../../components/loading/Loading.tsx";

const GridLayout = () => {
  const { images, nextPage, filteredImages } = useImages();
  // console.log("Filtered Images:", filteredImages);
  const validImages = filteredImages.filter((image) => image.src && image.src.large);

  if (!images.length) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      {!validImages.length ? (
        <NoDataFound />
      ) : (
        <>
          <div className="grid-wrapper">
            {validImages.map((image) => (
              <Card key={image.id} image={image} />
            ))}
          </div>
          <button onClick={nextPage} className="load-more-btn">
            {UI_TEXT.LOAD_MORE}
          </button>
        </>
      )}
    </>
  );
};

export default GridLayout;
