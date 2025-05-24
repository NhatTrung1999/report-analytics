import { Button, Card, Div, Input, Label, Select, Textarea } from "../ui";

const Sidebar = ({
  sidebarHeight,
  sidebarWidth,
}: {
  sidebarHeight: number;
  sidebarWidth: number;
}) => {
  //item
  const itemSidebarHeight = sidebarHeight / 4;

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
        />
        <Button title="Query" />
      </Card>
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col gap-2">
        <Label label="Columns" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md flex flex-col gap-2">
          <Div className="border border-gray-200 flex items-center px-2 py-1 gap-2 rounded-md">
            <Input
              type="checkbox"
              className="cursor-pointer size-4 focus:outline-none outline-none"
            />
            <Div className="text-base font-semibold">Product</Div>
          </Div>
          <Div className="border border-gray-200 flex items-center px-2 py-1 gap-2 rounded-md">
            <Input
              type="checkbox"
              className="bg-gray-200 hover:bg-gray-300 cursor-pointer size-4 border border-gray-300 focus:outline-none outline-none"
            />
            <Div className="text-base font-semibold">Categtory</Div>
          </Div>
          <Div className="border border-gray-200 flex items-center px-2 py-1 gap-2 rounded-md">
            <Input
              type="checkbox"
              className="bg-gray-200 hover:bg-gray-300 cursor-pointer size-4 border border-gray-300 focus:outline-none outline-none"
            />
            <Div className="text-base font-semibold">Quantity</Div>
          </Div>
        </Div>
      </Card>
      <Card
        style={{ height: itemSidebarHeight }}
        className="flex flex-col gap-2">
        <Label label="Charts Columns" />
        <Div className="border border-gray-300 text-gray-500 p-2 flex-1 overflow-y-auto rounded-md"></Div>
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
