import { Nav } from "../components/nav";
import Footer from "../components/footer";
import PageLayout from "../components/pageLayout";

const Tjenester = () => {
  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <h1 className="text-4xl text-center py-10">Tjenester</h1>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Tjenester;
