import { createContext, useContext, useState, useEffect, ReactNode, useMemo, useCallback } from "react";
import { ImageInterface } from "../types/types";
import { createClient } from "pexels";

const clientId = import.meta.env.VITE_PEXELS_ACCESS_KEY;
const client = createClient(clientId);

interface ImageContextType {
  images: ImageInterface[];
  loading: boolean;
  error: string | null;
  nextPage: () => void;
  filteredImages: ImageInterface[];
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setImages: (images: ImageInterface[]) => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider = ({ children }: { children: ReactNode }) => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<ImageInterface[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredImages = useMemo(
    () =>
      images.filter((img) =>
        img.photographer?.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [images, searchTerm]
  );

  const fetchImages = useCallback(async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const res = await client.photos.curated({ page, per_page: 40 });

      if ("photos" in res && Array.isArray(res.photos)) {
        const newPhotos: ImageInterface[] = res.photos.map((photo) => ({
          id: photo.id.toString(),
          width: photo.width,
          height: photo.height,
          src: {
            large: photo.src.large,
            medium: photo.src.medium,
            small: photo.src.small,
          },
          alt: photo.alt || "No description",
          photographer: photo.photographer,
        }));

        setImages((prevImages) => {
          const seen = new Set(prevImages.map((image) => image.id));
          return [...prevImages, ...newPhotos.filter((image) => !seen.has(image.id))];
        });
      } else {
        throw new Error("Invalid response from API");
      }
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  }, []);

  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  useEffect(() => {
    fetchImages(page);
  }, [page, fetchImages]);

  useEffect(() => {
    if (images.length === 0) fetchImages(page);
  }, [fetchImages]);

  return (
    <ImageContext.Provider
      value={{
        images,
        loading,
        error,
        nextPage,
        searchTerm,
        setSearchTerm,
        filteredImages,
        setImages,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImages = () => {
  const context = useContext(ImageContext);
  if (!context) throw new Error("useImages must be used within ImageProvider");
  return context;
};
