export interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <div className="flex rounded-sm px-2 bg-blue-500">
      <span className="text-sm">{tag}</span>
    </div>
  );
};

export default Tag;
