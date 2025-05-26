import { useAppSelector } from "../../app/hooks";
import { Card, Chart, Div, Label } from "../ui";

const AnalyticTile = ({
  analyticTileHeight,
  analyticTileWidth,
}: {
  analyticTileHeight: number;
  analyticTileWidth: number;
}) => {
  const { results } = useAppSelector((state) => state.sql);
  const itemAnalyticTileHeight = analyticTileHeight / 2;

  const getColumns = () => {
    if (!results || results.length === 0) return [];
    return Object.keys(results[0]);
  };

  return (
    <div
      style={{ height: analyticTileHeight, width: analyticTileWidth }}
      className="flex flex-col gap-2">
      <Card
        style={{ height: itemAnalyticTileHeight, width: analyticTileWidth }}
        className="flex flex-col gap-2">
        <Label label="Table" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto overflow-x-auto rounded-md">
          <table >
            <thead className="whitespace-nowrap">
              <tr>
                {getColumns().map((key, index) => (
                  <th
                    className="p-2 text-left border border-blue-400 bg-blue-500 text-white"
                    key={index}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {results.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {getColumns().map((key, colIndex) => (
                    <td
                      className="p-2 border border-blue-400"
                      key={`${rowIndex}-${colIndex}`}>
                      {row[key] !== null && row[key] !== undefined
                        ? row[key].toString()
                        : ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Div>
      </Card>
      <Card
        style={{ height: itemAnalyticTileHeight }}
        className="flex flex-col gap-2">
        <Label label="Chart" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md">
          <Chart/>
        </Div>
      </Card>
    </div>
  );
};

export default AnalyticTile;
