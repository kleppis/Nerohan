import { Nav } from "../../components/nav";
import Footer from "../../components/footer-comp/footer";
import PageLayout from "../../components/pageLayout";
import { HomeLink } from "../../components/homeLink";
import { ulikeTjenester } from "../../constants/tjenester";

const Tjenester = () => {
  console.log("ulikeTjenester:", ulikeTjenester); // Legg til denne linjen for å sjekke dataene

  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className=" md:mb-spacerMd">
          <ul className="flex flex-col space-y-spacerMd md:space-y-6">
            {Object.values(ulikeTjenester).map((tjeneste) => (
              <HomeLink
                key={tjeneste.href}
                title={tjeneste.title}
                href={tjeneste.href}
              />
            ))}
          </ul>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tjenester;
