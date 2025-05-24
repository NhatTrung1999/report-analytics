

const Input = ({
  type,
  className,
}: {
  type: string;
  className?: string;
}) => {
  return <input type={type} className={`${className}`} />;
};

export default Input;
