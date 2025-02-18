import { Nav } from "../components/nav";
import Footer from "../components/footer-comp/footer";
import PageLayout from "../components/pageLayout";
import { ulikeProsjekter } from "../constants/prosjekter";
import { Container } from "../components/misc/container";

const Prosjekter = () => {
  return (
    <>
      <Nav title="Prosjekter" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1>Prosjekter</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {ulikeProsjekter.map((prosjekt) => (
            <Container>
              <h2>{prosjekt.tittel}</h2>
              <p>{prosjekt.beskrivelse}</p>
            </Container>
          ))}
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Prosjekter;
