import { Nav } from "../components/nav";
import Footer from "../components/footer-comp/footer";
import PageLayout from "../components/pageLayout";
import { ulikeProsjekter } from "../constants/prosjekter";
import { Container } from "../components/misc/container";
import { Gallery } from "../components/gallery";

const Prosjekter = () => {
  return (
    <>
      <Nav title="Prosjekter" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1 className="mb-spacer display uppercase">Prosjekter</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {ulikeProsjekter.map((prosjekt) => (
            <Container>
              <h2 className="mb-3">{prosjekt.tittel}</h2>
              <div className="flex justify-between space-x-2">
                <p className="w-1/2">{prosjekt.beskrivelse}</p>
                <div className="w-1/2">
                  <img
                    className="rounded-lg shadow-md shadow-slate-600"
                    src="/assets/makita.jpg"
                    alt=""
                  />
                </div>
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
