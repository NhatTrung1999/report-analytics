import React from "react";

const Div = ({
  style,
  className,
  children,
}: {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div style={style} className={`${className}`}>
      {children}
    </div>
  );
};

export default Div;
