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
            <HomeLink title="Kontakt" href="/kontakt" />
          </ul>
        </div>
        <div className="py-10 flex flex-col md:flex-row md:space-x-6">
          <div>
            <SlideIn>
              <h2 className="uppercase">Pålitelighet</h2>
              <p>
                <strong>Nero AS</strong> står for trygghet og kvalitet gjennom
                hele byggeprosessen. Vi setter ærlighet, presisjon og
                punktlighet i fokus, og leverer alltid som avtalt. Med åpen
                kommunikasjon og en strukturert tilnærming sikrer vi at dine
                forventninger innfris fra start til slutt. Hos oss får du en
                partner du kan stole på.
              </p>
            </SlideIn>
          </div>
          <div className="md:mt-40 mt-10">
            <SlideIn>
              <h2 className="uppercase">Kvalitet</h2>
              <p>
                Med lang erfaring i bransjen forstår vi viktigheten av godt
                håndverk og nøyaktighet. Vi skreddersyr løsninger tilpasset dine
                behov og leverer arbeid med høy kvalitet. Fra planlegging til
                ferdigstillelse står vi for åpen kommunikasjon og pålitelighet.
                Velger du <strong>Nero AS</strong>, velger du en trygg
                samarbeidspartner.
              </p>
            </SlideIn>
          </div>
          <div className="md:mt-80 mt-10">
            <SlideIn>
              <h2 className="uppercase">Lidenskap</h2>
              <p>
                Hos <strong>Nero AS</strong> møter du et erfarent team som
                brenner for sitt fag. Vi kombinerer tradisjonelt håndverk med
                moderne løsninger for å skape bygg som varer. Med oss får du en
                samarbeidspartner som lytter til dine ønsker og leverer på
                avtalt tid og budsjett. Vi bygger ikke bare bygg – vi bygger
                relasjoner.
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
