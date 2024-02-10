import { Outlet} from "react-router-dom";
import Header from "../Components/Header";

export default function Root() {
    return (
        <>
            <Header />
            <Outlet />
            <footer>Footer</footer>
        </>
    )
}