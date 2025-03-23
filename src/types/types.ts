export interface ImageInterface {
  id: string | number;
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


export interface Size {
  width: number;
  height: number;
}