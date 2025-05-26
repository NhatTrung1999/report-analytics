import { ToastContainer } from "react-toastify";
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
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default App;
