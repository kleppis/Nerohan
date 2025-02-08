import { Nav } from "../components/nav";
import Footer from "../components/footer";
import PageLayout from "../components/pageLayout";
import { HomeLink } from "../components/homeLink";

const Tjenester = () => {
  return (
    <>
      <Nav title="Tjenester" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className=" mb-spacer">
          <p className="mb-spacer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            quasi, doloribus fugit nisi iusto placeat illo explicabo aperiam
            deserunt error officia cupiditate aliquam eos odio? Quae quidem
            dignissimos mollitia, omnis nam voluptas facilis aspernatur!
            Mollitia iure ut quia dolor praesentium unde expedita. Ipsa
            similique in minus facilis! Neque in quisquam omnis voluptas ipsa
            voluptatem, eos impedit? Non perferendis quia, molestias veritatis
            quidem placeat sed, dolores libero nihil officia officiis fugit
            temporibus impedit recusandae aperiam fugiat beatae porro nam
            ducimus. Consequatur fuga consequuntur beatae quod expedita quos
            voluptates quidem, pariatur laboriosam optio vel ducimus iusto
            blanditiis, dolore error deserunt ad accusamus.
          </p>
          <ul className="flex flex-col space-y-14">
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
