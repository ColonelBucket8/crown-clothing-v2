import './directory-item.style';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.style';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`shop/${category.title}`);
  };

  return (
    <DirectoryItemContainer key={category.id} onClick={handleClick}>
      <BackgroundImage
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <Body>
        <h2>{category.title}</h2>
        <p>Shop Now </p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
