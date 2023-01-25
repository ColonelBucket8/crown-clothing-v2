import './directory-item.style';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.style';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { CategoriesType } from '../../routes/home/home.component';

type DirectoryItemProps = {
  category: CategoriesType;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
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
