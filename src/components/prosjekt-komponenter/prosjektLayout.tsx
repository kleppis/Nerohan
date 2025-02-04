import { Gallery } from "../gallery";

const images = [
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

const ProsjektLayout = () => {
  return (
    <>
      <div className="bg-white ">
        <div className="max-w-7xl mx-auto flex justify-between">
          <div className="w-1/2">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              cum perspiciatis aperiam ipsa, distinctio tempore soluta accusamus
              sint veritatis tenetur ipsam itaque libero ipsum voluptatum
              repellendus aspernatur, quis beatae assumenda numquam blanditiis
              velit exercitationem consectetur. Quos omnis velit debitis, libero
              magni illo quo eligendi. Beatae explicabo corporis numquam
              aspernatur quasi doloremque reiciendis quas, ipsam repellendus
              consequatur ex laborum asperiores fuga esse, nisi molestiae? Totam
              blanditiis, aut, possimus tempore voluptas, rerum saepe et
              mollitia quis nisi est reprehenderit sunt voluptatum cupiditate
              ipsa dolor modi esse voluptate. Illum temporibus, nihil ullam,
              quasi, distinctio enim quas fugit exercitationem cum ipsum amet
              beatae nobis.
            </p>
          </div>
          <Gallery images={images} />
        </div>
      </div>
    </>
  );
};

export default ProsjektLayout;
