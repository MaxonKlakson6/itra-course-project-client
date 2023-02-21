import { useParams } from 'react-router';

const ChangeItemContainer = () => {
  const { itemId, collectionId } = useParams();

  return (
    <div>
      <p>{itemId}</p>
      <p>{collectionId}</p>
    </div>
  );
};

export default ChangeItemContainer;
