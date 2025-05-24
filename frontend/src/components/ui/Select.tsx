import React from "react";

const Select = ({
  style,
  className,
  options = [],
}: {
  style?: React.CSSProperties;
  className?: string;
  options?: { name: string; value: string }[];
}) => {
  return (
    <select style={style} className={`${className}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
