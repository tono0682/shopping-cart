import { Outlet} from "react-router-dom";
import Header from "../Components/Header";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

export default function Root() {
    
    return (
        <div className="flex flex-col min-h-screen bg-jungle-bg bg-cover">
            <Header />
            <NavBar />
            <div className="grow bg-gray-100 bg-opacity-100 flex flex-col py-5 px-10" >
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}