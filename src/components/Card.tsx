import Tag from './Tag';

export interface CardProps {
  title: string;
  content?: string;
  image?: string;
  tags: string[];
}

const Card: React.FC<CardProps> = ({ title, content, image, tags }) => {
  return (
    <div className="flex flex-col rounded-sm border-2 shadow-md">
      <div className="flex">
        <img
          className="object-contain md:object-cover"
          src={image}
          alt="image"
        />
      </div>
      <div className="flex flex-col gap-4 p-8">
        <div className="flex justify-between">
          <h2 className="text-xl font-semibold">{title}</h2>
        </div>

        <div className="flex">
          <p className="text-ellipsis md:text-clip">{content}</p>
        </div>

        <div className="flex">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
