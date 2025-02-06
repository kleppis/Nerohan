import { Nav } from "../components/nav";
import Footer from "../components/footer";
import PageLayout from "../components/pageLayout";

const Tjenester = () => {
  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className="flex"></div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tjenester;
