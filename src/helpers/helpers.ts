import {Size} from "../types/types.ts";

export const setImageSize = (width: number, height: number) => {
  let className;

  if(width < height) {
    // tall
    if (height > 6000) {
      className = 'big-tall'
    } else {
      className = 'tall'
    }
  } else {
    // wide
    if (width > 4000) {
      className = 'wide'
    } else {
      className = 'big'
    }
  }
  return className
}

export function calculateImageContainerSize(
  imageSize: Size,
  maxSize: Size
): Size {
  const { width: imgW, height: imgH } = imageSize;
  const { width: maxW, height: maxH } = maxSize;

  const widthRatio = maxW / imgW;
  const heightRatio = maxH / imgH;

  const scale = Math.min(widthRatio, heightRatio, 1);

  return {
    width: Math.floor(imgW * scale),
    height: Math.floor(imgH * scale),
  };
}