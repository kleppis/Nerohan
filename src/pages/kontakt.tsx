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
                <strong className="pe-3">Telefon:</strong>+47 123 45 678
              </h4>
              <h4>
                <strong className="pe-3">Epost:</strong>nerohan@nero.as
              </h4>
            </ul>
          </Nedtrekk>
          <Nedtrekk title="Fakturainformasjon">
            <ul className="space-y-4">
              <h4>
                <strong className="pe-3">Organisasjonsnummer:</strong>568 123
                678 678
              </h4>
              <h4>
                Nero AS <br />
                ECIT Org. nr. NO "organisasjonsnummer" MVA <br />
                Postboks ## <br />
                1304 Skui
              </h4>
            </ul>
          </Nedtrekk>
          <Nedtrekk title="Kontaktperson">
            <ul className="space-y-4">
              <h4>
                <strong className="pe-3">Navn:</strong>Nerohan Simrad Selvendran
              </h4>
              <h4>
                <strong className="pe-3">Telefon:</strong>+47 123 45 678
              </h4>
              <h4>
                <strong className="pe-3">Epost:</strong>nerohan@nero.as
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
