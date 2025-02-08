import { Nav } from "../components/nav";
import Footer from "../components/footer";
import PageLayout from "../components/pageLayout";
import Nedtrekk from "../components/nedtrekk";

const Kontakt = () => {
  return (
    <>
      <Nav title="Kontakt" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1 className="uppercase mb-spacer text-2xl font-bold">Kontakt oss</h1>

        <Nedtrekk title="Generell informasjon">
          <p>test</p>
        </Nedtrekk>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Kontakt;
