import PageLayout from "../../components/pageLayout";
import { ulikeProsjekter } from "../../constants/prosjekter";

const ProsjektPage = () => {
  return ulikeProsjekter.map((prosjekt) => (
    <PageLayout imgUrl="/assets/makita.jpg" alt="Nero">
      <div>{prosjekt.tittel}</div>
    </PageLayout>
  ));
};

export default ProsjektPage;
