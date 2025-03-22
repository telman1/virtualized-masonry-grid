import {createContext, useContext, useState, useEffect, ReactNode, useMemo} from "react";
import {Image} from "../types/types";
import {createClient} from 'pexels';
const clientId = import.meta.env.VITE_PEXELS_ACCESS_KEY;
const client = createClient(clientId);

interface ImageContextType {
  images: Image[];
  loading: boolean;
  error: string | null;
  nextPage: () => void;
  filteredImages: Image[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setImages: (images: Image[]) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredImages = useMemo(() => {
    return images.filter((img) =>
      img.photographer?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [images, searchTerm]);

  const fetchImages = async (page: number) => {
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

  const nextPage = () => setPage((prev) => prev + 1);

  useEffect(() => {
    fetchImages(page);
  }, [page]);

  useEffect(() => {
    if (images.length === 0) {
      fetchImages(page);
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <ImageContext.Provider value={{ images, loading, error, nextPage, searchTerm, setSearchTerm, filteredImages, setImages }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImages must be used within ImageProvider");
  return context;
};
