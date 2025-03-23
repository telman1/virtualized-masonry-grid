export interface Image {
  id: string;
  width: number;
  height: number;
  src: {
    large: string;
    large2x?: string;
    medium?: string;
    small?: string;
  };
  alt?: string;
  photographer: string;
}

export interface ImageDataType {
  width: number;
  height: number;
  src: {
    large2x: string;
  };
  alt: string;
  photographer: string;
}

export interface Size {
  width: number;
  height: number;
}