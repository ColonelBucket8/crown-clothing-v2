import Directory from '../../components/directory/directory.component';
import categories from '../../categories.json';

export type CategoriesType = {
  id: number;
  title: string;
  imageUrl: string;
};
const Home = () => {
  return <Directory categories={categories} />;
};

export default Home;
