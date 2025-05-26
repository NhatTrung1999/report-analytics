import { useState } from "react";
import { Button, Card, Div, Input, Label, Select, Textarea } from "../ui";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchQuerySql } from "../../features/sqlSlice";
import { toast } from "react-toastify";

const Sidebar = ({
  sidebarHeight,
  sidebarWidth,
}: {
  sidebarHeight: number;
  sidebarWidth: number;
}) => {
  const { results, loading } = useAppSelector((state) => state.sql);
  const dispatch = useAppDispatch();
  const [textAreaVal, setTextAreaVal] = useState<string>("");

  //item
  const itemSidebarHeight = sidebarHeight / 4;

  const handleQuery = () => {
    if (!textAreaVal.trim()) {
      toast.error("Please enter a SQL query.");
      return;
    }
    dispatch(fetchQuerySql(textAreaVal));
  };

  const getColumns = () => {
    if (!results || results.length === 0) return [];
    console.log(results);
    return Object.keys(results[0]);
  };

  return (
    <div
      style={{ height: sidebarHeight, width: sidebarWidth }}
      className="flex flex-col gap-2">
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col justify-between gap-2">
        <Label label="SQL Query" />
        <Textarea
          className="flex-1 p-2 text-base outline-none border border-gray-300 rounded-md text-gray-500 font-medium"
          placeholder="Write your sql query..."
          value={textAreaVal}
          handleChange={(e) => setTextAreaVal(e.target.value)}
        />
        <Button
          title={loading ? "Executing..." : "Query"}
          handleClick={handleQuery}
        />
      </Card>
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col gap-2">
        <Label label="Columns" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md flex flex-col gap-2">
          {getColumns().map((key, index) => (
            <Div
              className="border border-gray-200 flex items-center px-2 py-1 gap-2 rounded-md"
              key={index}>
              <Input
                type="checkbox"
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer size-4 border border-gray-300 focus:outline-none outline-none"
              />
              <Div className="text-base font-semibold">{key}</Div>
            </Div>
          ))}
        </Div>
      </Card>
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col gap-2">
        <Label label="Charts Columns" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md flex flex-col gap-2">
          {getColumns().map((key, index) => (
            <Div
              className="border border-gray-200 flex items-center px-2 py-1 gap-2 rounded-md"
              key={index}>
              <Input
                type="checkbox"
                className="bg-gray-200 hover:bg-gray-300 cursor-pointer size-4 border border-gray-300 focus:outline-none outline-none"
              />
              <Div className="text-base font-semibold">{key}</Div>
            </Div>
          ))}
        </Div>
      </Card>
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col gap-2">
        <Label label="Customizes" />
        <Div className="flex-1 overflow-y-auto flex flex-col gap-1">
          <Div className="flex flex-col gap-1">
            <Label label="Aggregate Functions" className="text-sm" />
            <Select
              className="border border-gray-300 text-gray-500 text-base outline-none p-1 rounded-md"
              options={[
                {
                  name: "Choose option",
                  value: "",
                },
                {
                  name: "Tong",
                  value: "sum",
                },
                {
                  name: "Trung binh",
                  value: "average",
                },
                {
                  name: "Gia tri lon nhat",
                  value: "max",
                },
                {
                  name: "Gia tri nho nhat",
                  value: "min",
                },
                {
                  name: "Top N",
                  value: "topn",
                },
              ]}
            />
          </Div>

          <Div className="flex flex-col gap-1">
            <Label label="Data Visualization" className="text-sm" />
            <Select
              className="border border-gray-300 text-gray-500 text-base outline-none p-1 rounded-md"
              options={[
                {
                  name: "Choose option",
                  value: "",
                },
                {
                  name: "Bieu do cot",
                  value: "column_chart",
                },
                {
                  name: "Bieu do duong",
                  value: "line_chart",
                },
                {
                  name: "Bieu do tron",
                  value: "pie_chart",
                },
                {
                  name: "Bieu do phan tan",
                  value: "scatter_plot",
                },
              ]}
            />
          </Div>
        </Div>
        <Button title="Create Report" />
      </Card>
    </div>
  );
};

export default Sidebar;
