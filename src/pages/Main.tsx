import { cards } from '../assets/data';
import { CardList } from '../features';

const Main = () => {
  return (
    <div className="flex p-4">
      <CardList cards={cards} />
    </div>
  );
};

export default Main;
