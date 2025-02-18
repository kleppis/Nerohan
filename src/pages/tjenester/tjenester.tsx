import { Nav } from "../../components/nav";
import Footer from "../../components/footer-comp/footer";
import PageLayout from "../../components/pageLayout";
import { HomeLink } from "../../components/homeLink";

export const ulikeTjenester = {
  Totalenterprise: {
    title: "Totalenterprise",
    href: "tjenester/totalenterprise",
  },
  Tilbygg: {
    title: "Tilbygg",
    href: "tjenester/tilbygg",
  },
  Rehabilitering: {
    title: "Rehabilitering",
    href: "tjenester/rehabilitering",
  },
};

const Tjenester = () => {
  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className=" md:mb-spacerMd">
          <ul className="flex flex-col space-y-spacerMd md:space-y-6">
            {Object.values(ulikeTjenester).map((tjeneste) => (
              <HomeLink title={tjeneste.title} href={tjeneste.href} />
            ))}
          </ul>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tjenester;
