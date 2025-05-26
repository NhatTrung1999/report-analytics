import React from "react";

const Textarea = ({
  style,
  className,
  placeholder,
  value,
  handleChange,
}: {
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
  value?: string;
  handleChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  return (
    <textarea
      style={style}
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Textarea;
