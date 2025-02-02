interface ImageType {
  id: string;
  url: string;
  alt: string;
  title: string;
}

interface GalleryProps {
  images: ImageType[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-fit">
      {images.map((image) => (
        <div key={image.id} className="group relative w-56">
          <img
            src={image.url}
            alt={image.alt}
            className="w-56 object-contain rounded-lg drop-shadow-lg hover:drop-shadow-2xl shadow-black z-40"
          />
          <div className="absolute rounded-lg  top-0 left-0 group-hover:left-1 group-hover:top-1 transition-all h-full w-full bg-black opacity-40 z-30"></div>
          <div className="absolute inset-0 rounded-lg  opacity-0 group-hover:opacity-70 transition-all duration-500 flex justify-center items-center">
            <h2 className="text-white text-2xl font-bold">{image.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};
