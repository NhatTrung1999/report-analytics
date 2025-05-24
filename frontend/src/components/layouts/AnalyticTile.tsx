import { Card, Div, Label } from "../ui";

const AnalyticTile = ({
  analyticTileHeight,
  analyticTileWidth,
}: {
  analyticTileHeight: number;
  analyticTileWidth: number;
}) => {
  const itemAnalyticTileHeight = analyticTileHeight / 2;

  return (
    <div
      style={{ height: analyticTileHeight, width: analyticTileWidth }}
      className="flex flex-col gap-2">
      <Card
        style={{ height: itemAnalyticTileHeight }}
        className="flex flex-col gap-2">
        <Label label="Table" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md"></Div>
      </Card>
      <Card
        style={{ height: itemAnalyticTileHeight }}
        className="flex flex-col gap-2">
        <Label label="Chart" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md"></Div>
      </Card>
    </div>
  );
};

export default AnalyticTile;
