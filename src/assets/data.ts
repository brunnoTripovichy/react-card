import type { CardProps } from '../components/Card';
import profilePic from './Attachment_1616610608 (1).jpeg';

// Mock card data
export const cards: CardProps[] = [
  {
    title: 'Brunno Tripovichy',
    content:
      'Passionate about scalable web apps, Vue.js, Angular, TypeScript, and Node.js. Always learning & building.',
    image: profilePic,
    tags: ['vue', 'angular', 'react', 'typescript', 'nodejs'],
  },
  {
    title: 'Brunno',
    content: `Passionate about building scalable, high-performance web applications with Vue.js, Angular, TypeScript, and Node.js. Always learning, adapting, and exploring new technologies. While I haven't worked on a React project yet, I have a strong understanding of its ecosystem and can pick up any frontend framework with ease.`,
    image: profilePic,
    tags: ['tag1', 'tag2'],
  },
  {
    title: 'Tripovichy',
    content: 'Content 3',
    image: profilePic,
    tags: ['tag1', 'tag2'],
  },
];
