import { Outlet } from "react-router-dom";
import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl m-auto">
            <div className="sticky top-0 z-10">
            <Header></Header>
            </div>
            <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;