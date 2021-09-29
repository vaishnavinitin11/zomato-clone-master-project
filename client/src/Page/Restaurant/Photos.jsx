import React, { useState } from "react";
import ImageViewer from "react-simple-image-viewer";

// components
import PhotoCollection from "../../Components/Restaurant/PhotosCollection";

const Photos = () => {
  const [photos, setPhotos] = useState([
    "https://b.zmtcdn.com/data/pictures/chains/9/18140649/fbc91e81c299064e98be43663a3bed74.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/9/18140649/d7c8926cb0788a6e06a972a5da8e740c.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
    "https://b.zmtcdn.com/data/pictures/chains/9/18140649/558880818932a76684fdd07fa67fe2ca.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
  ]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [CurrentImg, setCurrentImg] = useState(0);
  const closeViewer = () => setIsMenuOpen(false);
  const openViewer = () => setIsMenuOpen(true);
  return (
    <>
      {isMenuOpen && (
        <ImageViewer
          src={photos}
          currentIndex={CurrentImg}
          disableScroll={false}
          onClose={closeViewer}
          // onClickPrev={prevImage}
          // onClickNext={NextImage}
        />
      )}
      <div className="flex flex-wrap gap-2">
        {photos.map((photo) => (
          <PhotoCollection image={photo} openViewer={openViewer} />
        ))}
      </div>
    </>
  );
};

export default Photos;
