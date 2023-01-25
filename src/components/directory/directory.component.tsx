import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style';
import { DirectoryContainer } from './directory.style';
import { FC } from 'react';
import { CategoriesType } from '../../routes/home/home.component';

type DirectoryProps = {
  categories: CategoriesType[];
};
const Directory: FC<DirectoryProps> = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
