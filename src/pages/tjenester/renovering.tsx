import { Nav } from "../../components/nav";
import Footer from "../../components/footer";
import PageLayout from "../../components/pageLayout";
import { Gallery } from "../../components/gallery";

const Renovering = () => {
  return (
    <>
      <Nav title="Renovering" />
      <PageLayout imgUrl="/assets/makita.jpg" alt="Makita">
        <div className="flex justify-between">
          <div className="w-1/2">
            <h1 className="uppercase pb-spacer">Renovering</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptate explicabo eos ad ut impedit doloribus accusantium,
              molestiae voluptatum ipsa laudantium est aliquid neque adipisci
              dolorum recusandae ducimus porro? Atque, nobis consectetur. Minus
              quas porro consequatur facilis ea incidunt dolore cupiditate,
              ducimus perferendis. Reprehenderit itaque, quae natus similique
              libero, consequuntur unde, labore illum consectetur nemo iste
              tempora quidem beatae nisi neque at. Impedit architecto itaque qui
              magnam quasi iure minima aperiam ullam recusandae, sequi, corrupti
              iste distinctio? Animi ad, dignissimos consectetur non saepe
              cumque eius doloremque facilis reiciendis quos atque laudantium
              iusto distinctio! Tempore, ad voluptatum commodi libero quas
              numquam similique eligendi reiciendis, consequatur nulla
              molestias, facilis nobis doloremque. Laudantium, illo eveniet
              quasi ratione vitae nulla dolorem placeat id ex fuga vel soluta
              voluptatum, sed quam totam labore inventore non, libero
              repellendus quo incidunt esse. Et eum odit numquam sunt
              consectetur, quis quam asperiores earum placeat, in, nostrum error
              impedit aspernatur ullam blanditiis at! Temporibus omnis iusto
              repudiandae molestiae laborum facere suscipit beatae numquam
              explicabo. Possimus, maxime qui ea nisi dolorum, ab itaque in
              consequatur ipsam esse nam ipsum deserunt rem. Reprehenderit
              voluptatibus, consectetur recusandae vero modi maxime nemo
              mollitia tempora inventore similique in voluptate ipsa. Blanditiis
              at mollitia impedit?
            </p>
          </div>
          <Gallery />
        </div>
      </PageLayout>
      <Footer />
    </>
  );
};

export default Renovering;
