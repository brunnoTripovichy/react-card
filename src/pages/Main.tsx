import profilePic from './../assets/Attachment_1616610608 (1).jpeg';
import { CardList } from '../layouts';
import type { CardProps } from '../components/Card';

// Mock card data
const cards: CardProps[] = [
  {
    title: 'Brunno Tripovichy',
    content:
      'Passionate about scalable web apps, Vue.js, Angular, TypeScript, and Node.js. Always learning & building.',
    image: profilePic,
    tags: ['vue', 'angular', 'react', 'typescript', 'nodejs'],
  },
  {
    title: 'Title 2',
    content: 'Content 2',
    image: profilePic,
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Title 3',
    content: 'Content 3',
    image: profilePic,
    tags: ['tag1', 'tag2'],
  },
];

const Main = () => {
  return (
    <div className="flex p-4">
      <CardList cards={cards} />
    </div>
  );
};

export default Main;
