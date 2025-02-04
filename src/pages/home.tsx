import Footer from "../components/footer";
import { Gallery } from "../components/gallery";
import { HomeLink } from "../components/homeLink";
import { Nav } from "../components/nav";
import SlideIn from "../components/slideIn";

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
        <div className="flex space-x-20">
          <Gallery images={images} />
          <ul className="flex-col flex  space-y-20">
            <HomeLink title="Prosjekter" href="/prosjekter" />
            <HomeLink title="Tjenester" href="/prosjekter" />
            <HomeLink title="Kontakt" href="/prosjekter" />
          </ul>
        </div>
        <div className="py-10 flex space-x-6">
          <div>
            <SlideIn>
              <h2>God struktur</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                itaque illo, deleniti necessitatibus laboriosam quaerat eos
                laudantium corrupti voluptatibus dolorum nemo ratione maiores
                animi voluptatem a eum similique quibusdam! Ipsa et sapiente
                tenetur fuga, eum iusto debitis tempore deleniti voluptatem
                suscipit ipsum illum perspiciatis obcaecati nulla. Ipsum est
                placeat hic.
              </p>
            </SlideIn>
          </div>
          <div className="mt-40">
            <SlideIn>
              <h2>Lederskap</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                itaque illo, deleniti necessitatibus laboriosam quaerat eos
                laudantium corrupti voluptatibus dolorum nemo ratione maiores
                animi voluptatem a eum similique quibusdam! Ipsa et sapiente
                tenetur fuga, eum iusto debitis tempore deleniti voluptatem
                suscipit ipsum illum perspiciatis obcaecati nulla. Ipsum est
                placeat hic.
              </p>
            </SlideIn>
          </div>
          <div className="mt-80">
            <SlideIn>
              <h2>Infrastruktur</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
                itaque illo, deleniti necessitatibus laboriosam quaerat eos
                laudantium corrupti voluptatibus dolorum nemo ratione maiores
                animi voluptatem a eum similique quibusdam! Ipsa et sapiente
                tenetur fuga, eum iusto debitis tempore deleniti voluptatem
                suscipit ipsum illum perspiciatis obcaecati nulla. Ipsum est
                placeat hic.
              </p>
            </SlideIn>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
