import React from "react";
import { useSelector } from "react-redux";

const Gallery = () => {
  const images = useSelector((state) => state.images);

  return (
    <div>
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={image.alt} />
      ))}
    </div>
  );
};

export default Gallery;
