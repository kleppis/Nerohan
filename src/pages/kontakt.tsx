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
        <div className="flex-col flex space-y-10">
          <Nedtrekk title="Kontaktinformasjon">
            <p>test</p>
          </Nedtrekk>
          <Nedtrekk title="Fakturainformasjon">
            <p>test</p>
          </Nedtrekk>
          <Nedtrekk title="Kontaktperson">
            <p>test</p>
          </Nedtrekk>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Kontakt;
