import { NavLink } from "react-router";

function Footer() {


    return (
        <footer className="bg-black">
            <div className="bg-zinc-800 text-center h-5">
                
            </div>
            <div className="flex flex-col justify-center items-center py-10">
                <NavLink to="/">
                    {({ isActive }) => (
                        <span className={isActive ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-white"} >Accueil</span>
                    )}
                </NavLink>

                <NavLink to="/beers">
                    {({ isActive }) => (
                        <span className={isActive ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-white"} >Bières</span>
                    )}
                </NavLink>

                <NavLink to="/breweries">
                    {({ isActive }) => (
                        <span className={isActive ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-white"} >Brasseries</span>
                    )}
                </NavLink>
                <NavLink to="/beers/create">
                    {({ isActive }) => (
                        <span className={isActive ? "text-zinc-500 hover:text-white" : "text-zinc-500 hover:text-white"} >Nouvelle bière</span>
                    )}
                </NavLink>
            </div>
            <div className="bg-zinc-800 text-center">
                <p className="text-zinc-500">© 2025 Zythologue, inc</p>
            </div>

        </footer>
    )
}

export default Footer;