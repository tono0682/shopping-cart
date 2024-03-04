import { Link } from "react-router-dom"
import logo from "/dist/amazone-logo.png"

function Header() {
    return(
        <header className="flex justify-center items-center bg-background bg-opacity-90 px-6 py-4 border-b-2 border-neutral-500 gap-10">
            <Link  to={'/'} className="max-w-[200px]">
                <img src={logo} alt="amazone logo" />
            </Link>
            {/* todo: Add search bar to filter shop */}
            {/* <input className="min-w-[200px] max-w-[800px] grow rounded-full min-h-[30px] max-h-[60px] justify-self-center" type="text" /> */}
        </header>
    )
}

export default Header