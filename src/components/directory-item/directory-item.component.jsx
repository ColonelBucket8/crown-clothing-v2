import './directory-item.style';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.style';

const DirectoryItem = ({ category }) => {
  return (
    <DirectoryItemContainer key={category.id}>
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
