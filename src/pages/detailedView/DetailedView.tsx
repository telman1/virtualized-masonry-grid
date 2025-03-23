import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { createClient } from "pexels";
import { calculateImageContainerSize } from "@/helpers/helpers.ts";
import { UI_TEXT } from "@/helpers/constants.ts";
import Loading from "@/components/loading/Loading.tsx";
import "@/styles/pages/_detailed-view.scss";
import { ImageInterface } from "@/types/types.ts";

const clientId = import.meta.env.VITE_PEXELS_ACCESS_KEY;
const client = createClient(clientId);
const DetailedView = () => {
  const { imageId } = useParams();
  const navigate = useNavigate();
  const [imageData, setImageData] = useState<ImageInterface | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const fetchImage = useCallback(async () => {
    if (!imageId) {
      setError("Invalid Image ID");
      return;
    }

    try {
      const img = await client.photos.show({ id: imageId });
      if (img) {
        setImageData(img as ImageInterface);
      } else {
        setError("Image not found");
      }
    } catch (err) {
      setError("Failed to fetch image" + err);
    }
  }, [imageId]);

  const containerSize = calculateImageContainerSize(
    { width: imageData?.width ?? 0, height: imageData?.height ?? 0 },
    { width: windowSize.width * 0.9, height: windowSize.height * 0.8 }
  );

  console.log(windowSize.width);
  console.log(windowSize.width* 0.9);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!imageData) {
    return <Loading />;
  }

  return (
    <div
      className="image-detail-view"
      style={{
        maxWidth: containerSize.width,
        maxHeight: containerSize.height,
      }}
    >
      <button onClick={() => navigate(-1)}>{UI_TEXT.BACK_BUTTON}</button>
      <h2>{imageData.alt}</h2>
      <h3>
        {UI_TEXT.PHOTOGRAPHER} - {imageData.photographer}
      </h3>
      <img src={imageData.src.large2x} alt={imageData.alt} loading="lazy" />
    </div>
  );
};

export default DetailedView;
