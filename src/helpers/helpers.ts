export const setImageSize = (width, height) => {
  let className = 'original';
  if (width > 3000 && height > 4000) {
    className = 'big';
  } else if (width > 3000 && height < 3000) {
    className = 'wide';
  } else if (width < 3000 && height < 2000) {
    className = 'medium';
  }
  return className
}