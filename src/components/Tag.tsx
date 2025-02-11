export interface TagProps {
  tag: string;
}

const Tag: React.FC<TagProps> = ({ tag }) => {
  return (
    <span className="px-2 py-1 text-sm text-white bg-blue-400 rounded-md">
      {tag}
    </span>
  );
};

export default Tag;
