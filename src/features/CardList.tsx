import Card, { type CardProps } from '../components/Card';

export interface CardListProps {
  cards: CardProps[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
