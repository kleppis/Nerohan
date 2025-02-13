import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface ImageType {
  id: number;
  url: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  images?: ImageType[];
}

const defaultImages = [
  {
    id: 1,
    url: "/assets/makita.jpg",
    alt: "Makita",
    title: "Makita",
  },
  {
    id: 2,
    url: "/assets/makita.jpg",
    alt: "Makita",
    title: "Makita",
  },
  {
    id: 3,
    url: "/assets/makita.jpg",
    alt: "Makita",
    title: "Makita",
  },
  {
    id: 4,
    url: "/assets/makita.jpg",
    alt: "Makita",
    title: "Makita",
  },
];

export const Gallery: React.FC<GalleryProps> = ({ images = defaultImages }) => {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
    setOverlayVisible(true);
  };

  const handleCloseOverlay = () => {
    setOverlayVisible(false);
    setTimeout(() => {
      setSelectedImage(null);
    }, 300); // Samme varighet som CSS transition
  };

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 w-fit h-fit overflow-hidden">
        {images.map((image) => (
          <div
            key={image.id}
            className="group relative w-56"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-[40vw] md:w-44 lg:w-60 object-contain rounded-lg drop-shadow-lg hover:drop-shadow-2xl shadow-black z-40"
            />
            <div className="absolute hidden  bg-black inset-0 rounded-lg opacity-0 group-hover:opacity-70 transition-all duration-500 md:flex justify-center items-center cursor-pointer">
              <FaArrowRight size={50} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          onClick={handleCloseOverlay}
          className={` fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 transition-opacity duration-500 ${
            overlayVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="relative">
            <button
              className="absolute top-2 left-2 text-white text-3xl"
              onClick={(e) => {
                e.stopPropagation();
                handleCloseOverlay();
              }}
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-[70vw] md:w-1/2 rounded-3xl h-fit mx-auto object-contain transition-transform duration-500"
              style={{ transform: overlayVisible ? "scale(1)" : "scale(0.9)" }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
