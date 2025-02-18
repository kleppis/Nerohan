import { Nav } from "../../components/nav";
import Footer from "../../components/footer-comp/footer";
import PageLayout from "../../components/pageLayout";
import { Gallery } from "../../components/gallery";
import { LinkButton } from "../../components/misc/link";
import SlideIn from "../../components/misc/slideIn";
import { TilbakeLink } from "../../components/misc/tilbakeLink";
import { TilbyrOgså } from "../../components/tilbyrOgså";

const Rehabilitering = () => {
  return (
    <>
      <Nav title="Rehabilitering" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
          <div className="md:w-1/2 mb-spacerMd md:mb-0">
            <h1 className="uppercase mb-spacerMd md:mb-spacer">
              Rehabilitering
            </h1>
            <SlideIn>
              <p className="mb-spacerMd">
                Rehabilitering gir nytt liv til eksisterende bygg ved å
                kombinere moderne løsninger med bevaring av bygningens
                kvaliteter. Hos
                <strong> Nero AS</strong> har vi lang erfaring med å fornye og
                forbedre bygg gjennom nøye planlagte oppgraderinger som gir både
                funksjonalitet og estetikk.
              </p>
              <div className="mb-spacerMd">
                <TilbakeLink href="/tjenester" title="Tjenester" />
              </div>
            </SlideIn>
            <SlideIn>
              <h2 className="mb-spacerSm">Hva vi tilbyr:</h2>
              <ol className="mb-spacerMd space-y-2">
                <li>
                  <strong>Fasaderehabilitering:</strong> Forbedring og fornyelse
                  av byggets ytre for å øke både holdbarhet og estetikk.
                </li>
                <li>
                  <strong>Innvendig modernisering:</strong> Oppgrader interiøret
                  med løsninger som gir bedre komfort og funksjonalitet.
                </li>
                <li>
                  <strong>Strukturelle forbedringer:</strong> Forsterkning av
                  bærekonstruksjoner for økt sikkerhet og varighet.
                </li>
                <li>
                  <strong>Tak- og vindusutskiftning:</strong> Bedre isolasjon og
                  energieffektivitet med moderne materialer.
                </li>
              </ol>
            </SlideIn>
            <SlideIn>
              <h2 className="mb-spacerSm">
                Hvorfor velge oss til rehabilitering?
              </h2>
              <ol className="mb-spacerMd space-y-2">
                <li>
                  <strong>Erfaring og ekspertise:</strong> Vi har lang erfaring
                  med store og små renoveringsprosjekter.
                </li>
                <li>
                  <strong>Skreddersydde løsninger:</strong> Vi tilpasser hver
                  oppgave til dine ønsker og behov.
                </li>
                <li>
                  <strong>Kvalitet i alle ledd:</strong> Fra materialvalg til
                  håndverk – vi setter høye standarder.
                </li>
                <li>
                  <strong>Tett samarbeid:</strong> Vi involverer deg i hele
                  prosessen for å sikre at resultatet blir slik du ønsker.
                </li>
              </ol>
            </SlideIn>
            <SlideIn>
              <p className="mb-spacerMd">
                Uansett om du skal oppgradere et hjem, næringsbygg eller et
                historisk bygg, er <strong>Nero AS</strong> din trygge partner.
                Kontakt oss for en uforpliktende prat om ditt
                rehabiliteringsprosjekt.
              </p>
            </SlideIn>
            <SlideIn>
              <LinkButton href="/kontakt" title="ta kontakt" />
            </SlideIn>
          </div>
          <div className="md:translate-y-32 lg:translate-y-0">
            <Gallery />
            <p className="mt-spacerMd">Vi tilbyr også:</p>
            <LinkButton href="renovering" title="Renovering" />
            <TilbyrOgså />
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Rehabilitering;
