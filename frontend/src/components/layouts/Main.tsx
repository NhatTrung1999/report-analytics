import type { IMainProps } from "../../types";
import Sidebar from "./Sidebar";
import AnalyticTile from "./AnalyticTile";

const Main = ({ height, width }: IMainProps) => {
  const mainHeight = height - 15;
  const mainWidth = width;

  const sidebarWidth = mainWidth / 4;
  const analyticTileWidth = mainWidth - sidebarWidth;
  return (
    <div
      style={{ height, width }}
      className="p-2 flex justify-center items-center gap-2">
      <Sidebar sidebarHeight={mainHeight} sidebarWidth={sidebarWidth} />
      <AnalyticTile
        analyticTileHeight={mainHeight}
        analyticTileWidth={analyticTileWidth}
      />
    </div>
  );
};

export default Main;
