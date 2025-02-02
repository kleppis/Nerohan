import { useState } from "react";

interface ImageType {
  id: number;
  url: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  images: ImageType[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  const handleCloseOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative w-56"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-56 object-contain rounded-lg drop-shadow-lg hover:drop-shadow-2xl shadow-black z-40"
            />
            <div className="absolute bg-black inset-0 rounded-lg opacity-0 group-hover:opacity-70 transition-all duration-500 flex justify-center items-center">
              <h2 className="text-white text-2xl font-bold">{image.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={handleCloseOverlay}
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        >
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={handleCloseOverlay}
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-1/2 mx-auto rounded-3xl  max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
};
