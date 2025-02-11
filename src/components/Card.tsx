import Tag from './Tag';

export interface CardProps {
  title: string;
  content?: string;
  image?: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, content, image, tags }) => {
  return (
    <div className="flex flex-col rounded-sm border-2 shadow-md overflow-hidden">
      {image && (
        <img className="w-full h-48 object-cover" src={image} alt={title} />
      )}
      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        {content && <p className="text-gray-600">{content}</p>}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag} tag={tag} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
