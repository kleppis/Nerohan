import { Nav } from "../../components/nav";
import Footer from "../../components/footer";
import PageLayout from "../../components/pageLayout";
import { HomeLink } from "../../components/homeLink";

const Tjenester = () => {
  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className=" md:mb-spacerMd">
          <ul className="flex flex-col space-y-spacerMd md:space-y-14">
            <HomeLink title="Renovering" href="tjenester/renovering" />
            <HomeLink title="Rehabilitering" href="tjenester/rehabilitering" />
          </ul>
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tjenester;
