const Button = ({
  className,
  title,
  handleClick,
}: {
  className?: string;
  title: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      type="button"
      className={`bg-blue-500 py-2 font-semibold text-white rounded-md outline cursor-pointer ${className}`}
      onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
