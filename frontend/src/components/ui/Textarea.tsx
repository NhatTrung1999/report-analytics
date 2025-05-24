import React from "react";

const Textarea = ({
  style,
  className,
  placeholder,
}: {
  style?: React.CSSProperties;
  className?: string;
  placeholder?: string;
}) => {
  return (
    <textarea style={style} className={className} placeholder={placeholder} />
  );
};

export default Textarea;
