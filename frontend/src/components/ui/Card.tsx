import type React from "react";

const Card = ({
  style,
  className,
  children,
}: {
    style?: React.CSSProperties;
  className?: string
  children: React.ReactNode;
}) => {
  return (
    <div className={`bg-white rounded-md shadow-md p-2 ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
