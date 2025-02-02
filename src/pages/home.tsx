import { Gallery } from "../components/gallery";
import { HomeLink } from "../components/homeLink";
import Kontakt from "../components/kontakt";
import { Nav } from "../components/nav";

const Home = () => {
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
    {
      id: 4,
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

  return (
    <>
      <Nav />
      <img
        src="/assets/makita.jpg"
        alt=""
        className="w-full mx-auto h-[50vh] object-cover -translate-y-24"
      />
      <div className="bg-white  max-w-7xl mx-auto  py-3">
        <div className="flex space-x-20 min-h-screen">
          <Gallery images={images} />
          <ul className="flex-col flex  space-y-20">
            <HomeLink title="Prosjekter" href="/prosjekter" />
            <HomeLink title="Tjenester" href="/prosjekter" />
            <HomeLink title="Kontakt" href="/prosjekter" />
          </ul>
        </div>
        <div>
          <Kontakt />
        </div>
      </div>
    </>
  );
};

export default Home;
