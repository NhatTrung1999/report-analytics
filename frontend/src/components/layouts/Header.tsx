import type { IHeaderProps } from "../../types";

const Header = ({ height }: IHeaderProps) => {
  return (
    <div
      style={{
        height,
      }} className="p-2">
      <h1 className="bg-white flex justify-center items-center text-center text-4xl text-shadow-2xs text-[#96accf] shadow-xl rounded-md font-semibold w-full h-full">
        Report Analytics
      </h1>
    </div>
  );
};

export default Header;
