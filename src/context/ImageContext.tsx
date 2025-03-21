import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Image } from "../types/types";
import {createClient} from 'pexels';
const client = createClient('I7bLNHqMksgoy0dfiJbgQAuopLKbGYxR5B3Y2ldnWnXKwEZZQBBvIec4');

interface ImageContextType {
  images: Image[];
  loading: boolean;
  error: string | null;
  nextPage: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [error, setError] = useState<string | null>(null);

  const fetchImages = async (page) => {
    try {
      setLoading(true);
      setError(null);
      const res = await client.photos.curated({ page: page, per_page: 40 });
      const data = await res?.photos;
      setImages((prevPhotos) => {
        const seen = new Set(prevPhotos.map((image) => image.id));
        const filtered = data.filter((image) => !seen.has(image.id));
        return [...prevPhotos, ...filtered];
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const nextPage = () => {
    setPage(prev => {
      const next = prev + 1
      fetchImages(next);
      return next;
    });
  };

  useEffect(() => {
    if (images.length === 0) {
      fetchImages(page);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <ImageContext.Provider value={{ images, loading, error, nextPage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImages must be used within ImageProvider");
  return context;
};
