import { Nav } from "../components/nav";
import Footer from "../components/footer-comp/footer";
import PageLayout from "../components/pageLayout";
import { ulikeProsjekter } from "../constants/prosjekter";
import { Container } from "../components/misc/container";
import { FaLocationDot } from "react-icons/fa6";

const Prosjekter = () => {
  return (
    <>
      <Nav title="Prosjekter" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1 className="mb-spacer display uppercase">Prosjekter</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {ulikeProsjekter.map((prosjekt) => (
            <Container>
              <img
                className="rounded-lg shadow-md"
                src="/assets/makita.jpg"
                alt=""
              />
              <h2 className="my-3">{prosjekt.tittel}</h2>
              <div className="flex items-center space-x-2 text-text">
                <FaLocationDot className="text-text" />
                <p>Oslo</p>
              </div>
            </Container>
          ))}
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Prosjekter;
