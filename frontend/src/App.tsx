import { Header, Main } from "./components/layouts";
import { useWindowSize } from "./hooks";

function App() {
  const { width, height } = useWindowSize();
  const headerHeight = height / 12;
  const mainHeight = height - headerHeight

  return (
    <div style={{ height: `${height}px` }} className="bg-[#e9e9e9]">
      <Header height={headerHeight} />
      <Main height={mainHeight} width={width} />
    </div>
  );
}

export default App;

// <div className="h-screen flex flex-col bg-[#EEF2F6]">
//   <h1 className=" text-4xl py-2 font-semibold text-center text-shadow-2xs bg-white text-[#96accf] shadow-xl rounded-md mt-2 mx-2">
//     Report Analytics
//   </h1>
//   <div className="flex-1 grid grid-cols-4 gap-2 p-2">
//     <div className="grid grid-rows-4 gap-2">
//       <div className="flex flex-col gap-2 p-2 bg-white rounded-md shadow-md">
//         <label className="text-base font-bold text-gray-500">SQL Query</label>
//         <textarea
//           className="w-full flex-1 border-2 border-[#E2E8F0] bg-[#fffafa] outline-none rounded-md p-2 text-gray-500 font-medium text-lg"
//           placeholder="Write your sql query..."></textarea>
//         <button
//           type="button"
//           className="bg-blue-600 text-white py-2 rounded-md font-semibold cursor-pointer">
//           Query
//         </button>
//       </div>
//       <div className="row-span-3 flex flex-col justify-between gap-2 p-2 bg-white drop-shadow-md rounded-md">
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-bold text-gray-500">Columns</label>
//           <div className="border-2 h-[180px] overflow-y-auto rounded-md border-[#E2E8F0]"></div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-bold text-gray-500">Map Columns</label>
//           <div className="border-2 h-[180px] overflow-y-auto rounded-md border-[#E2E8F0]"></div>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-bold text-gray-500">Type Report</label>
//           <select className="border-2 border-[#E2E8F0] p-1 rounded-md outline-none text-gray-500 font-medium">
//             <option value="">Choose option</option>
//             <option value="">Tong</option>
//             <option value="">Trung binh</option>
//             <option value="">Gia tri lon nhat</option>
//             <option value="">Gia tri nho nhat</option>
//             <option value="">Top N</option>
//           </select>
//         </div>
//         <div className="flex flex-col gap-2">
//           <label className="text-base font-bold text-gray-500">Type Maps</label>
//           <select className="border-2 border-[#E2E8F0] p-1 rounded-md outline-none text-gray-500 font-medium">
//             <option value="">Choose option</option>
//             <option value="">Bieu do cot</option>
//             <option value="">Bieu do duong</option>
//             <option value="">Bieu do tron</option>
//             <option value="">Bieu do phan tan</option>
//           </select>
//         </div>
//         <div className="w-full">
//           <button
//             type="button"
//             className="bg-blue-600 text-white py-2 rounded-md font-semibold w-full cursor-pointer">
//             Create Report
//           </button>
//         </div>
//       </div>
//     </div>
//     <div className="col-span-3 grid grid-rows-3 gap-2">
//       <div className="flex flex-col p-2 gap-2 bg-white drop-shadow-md rounded-md">
//         <label className="text-base font-bold text-gray-500">Table</label>
//         <div className="h-[246px] border-2 border-[#E2E8F0] flex-1 rounded-md"></div>
//       </div>
//       <div className="row-span-2 flex flex-col p-2 gap-2 bg-white drop-shadow-md rounded-md">
//         <label className="text-base font-bold text-gray-500">Maps</label>
//         <div className="h-[542px] border-2 border-[#E2E8F0] flex-1 rounded-md"></div>
//       </div>
//     </div>
//   </div>
// </div>
