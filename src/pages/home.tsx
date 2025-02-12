import Footer from "../components/footer";
import { Gallery } from "../components/gallery";
import { HomeLink } from "../components/homeLink";
import { Nav } from "../components/nav";
import SlideIn from "../components/misc/slideIn";

const Home = () => {
  return (
    <>
      <Nav />
      <img
        src="/assets/makita.jpg"
        alt=""
        className="w-full mx-auto h-[50vh] object-cover -mt-24 mb-spacer"
      />
      <div className="bg-white  max-w-7xl mx-auto px-5 xl:px-0  py-3 overflow-hidden">
        <div className="flex flex-col-reverse md:flex-row md:space-x-10 xl:space-x-20">
          <Gallery />
          <ul className="flex-col flex  md:space-y-10 space-y-6 pb-10">
            <HomeLink title="Prosjekter" href="prosjekter" />
            <HomeLink title="Tjenester" href="/tjenester" />
            <HomeLink title="Kontakt" href="/prosjekter" />
          </ul>
        </div>
        <div className="py-10 flex flex-col md:flex-row md:space-x-6">
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
          <div className="md:mt-40 mt-10">
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
          <div className="md:mt-80 mt-10">
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
      </div>
      <Footer />
    </>
  );
};

export default Home;
