import CollectionCard from 'src/components/CollectionCard';
import defaultImage from 'src/static/images/default.jpg';

const DefaultContainer = () => (
  <div>
    <h1>Default</h1>
    <CollectionCard
      image={defaultImage}
      title='# Aboba'
      subject='Books'
      description='Some *text* here'
    />
  </div>
);

export default DefaultContainer;
