const Label = ({ label, className }: { label: string; className?: string }) => {
  return (
    <label className={`text-base font-bold text-gray-500 ${className}`}>
      {label}
    </label>
  );
};

export default Label;
