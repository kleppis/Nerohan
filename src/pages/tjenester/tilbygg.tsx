import { Nav } from "../../components/nav";
import Footer from "../../components/footer-comp/footer";
import PageLayout from "../../components/pageLayout";
import { Gallery } from "../../components/gallery";
import { LinkButton } from "../../components/misc/link";
import SlideIn from "../../components/misc/slideIn";
import { TilbakeLink } from "../../components/misc/tilbakeLink";
import { TilbyrOgså } from "../../components/tilbyrOgså";

const Tilbygg = () => {
  return (
    <>
      <Nav title="Tilbygg" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className="flex flex-col md:flex-row md:space-x-4 justify-between">
          <div className="md:w-1/2 mb-spacerMd md:mb-0">
            <h1 className="uppercase mb-spacerMd md:mb-spacer">Tilbygg</h1>
            <SlideIn>
              <p className="mb-spacerMd">
                Renovering handler om mer enn å fornye – det handler om å skape
                verdi, funksjonalitet og trivsel. Hos <strong>Nero AS</strong>{" "}
                tilbyr vi skreddersydde renoveringstjenester for boliger,
                næringsbygg og hytter. Med vår brede erfaring og dype kunnskap
                om byggeprosesser, sørger vi for resultater som kombinerer
                estetikk, kvalitet og varighet.
              </p>
              <div className="mb-spacerMd">
                <TilbakeLink href="/tjenester" title="Tjenester" />
              </div>
            </SlideIn>
            <SlideIn>
              <h2 className="mb-spacerSm">Hva vi tilbyr:</h2>
              <ol className="mb-spacerMd space-y-2">
                <li>
                  <strong>Totalrenovering:</strong> Fra planlegging til
                  ferdigstillelse – vi forvandler bygg med nøye gjennomførte
                  oppgraderinger.
                </li>
                <li>
                  <strong>Oppussing av bad og kjøkken:</strong> Moderne
                  løsninger som kombinerer funksjonalitet og stil.
                </li>
                <li>
                  <strong>Fasaderehabilitering:</strong> Gi bygget nytt liv med
                  oppgraderinger som både beskytter og forskjønner.
                </li>
                <li>
                  <strong>Etterisolering og energieffektivisering:</strong> Øk
                  komforten og senk energikostnadene.
                </li>
              </ol>
            </SlideIn>
            <SlideIn>
              <h2 className="mb-spacerSm">Hvorfor velge oss til renovering?</h2>
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
                Uansett om du planlegger en totalrenovering eller ønsker å
                oppgradere enkeltrom, står vi klare til å hjelpe deg med å
                realisere visjonen din. Kontakt <strong>Nero AS</strong> for en
                uforpliktende prat om ditt neste renoveringsprosjekt.
              </p>
            </SlideIn>
            <SlideIn>
              <LinkButton href="/kontakt" title="ta kontakt" />
            </SlideIn>
          </div>
          <div className="md:translate-y-32 lg:translate-y-0">
            <Gallery />
            <p className="mt-spacerMd">Vi tilbyr også:</p>
            <TilbyrOgså thisSite="Tilbygg" />
          </div>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tilbygg;
