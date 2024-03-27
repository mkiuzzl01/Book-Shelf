import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { ScaleLoader } from "react-spinners";

const Root = () => {
  const { state } = useNavigation();
  return (
    <div className="work-sans">
      <div className="max-w-6xl m-auto">
        <div className="sticky top-0 z-10">
          <Header></Header>
        </div>
        <div className="min-h-[calc(100vh-116px)]">
          <div className="flex flex-col items-center">
          {state === "loading" && (
            <div className="text-center absolute">
              <ScaleLoader color="#36d6a7" />
            </div>
          )}
          </div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
