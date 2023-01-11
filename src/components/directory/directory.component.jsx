import DirectoryItem from '../directory-item/directory-item.component';
import './directory.style';
import { DirectoryContainer } from './directory.style';

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
