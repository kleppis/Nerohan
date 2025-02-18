import { Nav } from "../components/nav";
import Footer from "../components/footer-comp/footer";
import PageLayout from "../components/pageLayout";
import Nedtrekk from "../components/nedtrekk";

const Kontakt = () => {
  return (
    <>
      <Nav title="Kontakt" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1 className="uppercase mb-spacerMd md:mb-spacer display">
          Kontakt oss
        </h1>
        <div className="flex-col flex space-y-10">
          <Nedtrekk title="Kontaktinformasjon">
            <ul className="space-y-4">
              <h4>
                <strong className="pe-3">Telefon:</strong>+47 401 69 161
              </h4>
              <h4>
                <strong className="pe-3">Epost:</strong>post@nero.as
              </h4>
            </ul>
          </Nedtrekk>
          <Nedtrekk title="Kontaktperson">
            <ul className="space-y-4">
              <h4>
                <strong className="pe-3">Navn:</strong>Nerohan Nimrod Selvendran
              </h4>
              <h4>
                <strong className="pe-3">Telefon:</strong>+47 401 69 161
              </h4>
              <h4>
                <strong className="pe-3">Epost:</strong>post@nero.as
              </h4>
            </ul>
          </Nedtrekk>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Kontakt;
