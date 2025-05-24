
const Button = ({
  className,
  title,
}: {
  className?: string;
  title: string;
}) => {
  return (
    <button type="button" className={`bg-blue-500 py-2 font-semibold text-white rounded-md outline cursor-pointer ${className}`}>
      {title}
    </button>
  );
};

export default Button;
