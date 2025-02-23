import { Link, NavLink } from "react-router"
import ArrowButton from "./ArrowButton";
import { useState } from "react";

function Navbar() {

    const [active, setActive] = useState(false);

    const displayMenu = () => {
        active ? setActive(false) : setActive(true);
    }

    return (
            <nav className="sticky z-50 top-0 w-full h-24 flex justify-between items-center text-white bg-black">
                <div className="z-50 top-0 w-full h-24 flex justify-between items-center p-5 text-white bg-black">
                    <div className="w-1/5">
                        <Link to="/" className="flex gap-5 w-full">
                            <img src="assets/images/beer_logo.png" alt="logo zythologue" className="max-h-10"/>
                            <span className="self-center text-xl font-bold text-green-600">Zythologue</span>
                        </Link>
                    </div>
                    <button 
                        className="md:hidden"
                        onClick={displayMenu}
                    >
                        <img src="/assets/icons/burger_menu.svg" alt=""  className="w-10 h-10" />
                    </button>
                </div>

                <div className={`w-full z-40 fixed p-5 left-0 bg-zinc-800 md:hidden transition-transform top-24 ${active ? 'translate-y-0' : 'translate-y-[-150%]'}`}>
                    <div className="flex flex-col items-center justify-center gap-5 p-5">
                        <NavLink to="/" onClick={() => setActive(false)}>
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"} >Accueil</span>
                            )}
                        </NavLink>

                        <NavLink to="/beers" onClick={() => setActive(false)}>
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"} >Bières</span>
                            )}
                        </NavLink>

                        <NavLink to="/breweries" onClick={() => setActive(false)}>
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"} >Brasseries</span>
                            )}
                        </NavLink>
                        <NavLink to="/beers/create" onClick={() => setActive(false)}>
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-white"} >Nouvelle bière</span>
                            )}
                        </NavLink>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <NavLink to="/login" onClick={() => setActive(false)}>
                            <ArrowButton color="white" text="Se connecter"/>
                        </NavLink>

                        <NavLink to="/signup" onClick={() => setActive(false)}>
                            <ArrowButton color="white" text="S'inscrire"/>
                        </NavLink>
                    </div>
                </div>
                <div className="hidden md:flex md:w-4/5 md:justify-end md:items-center">

                    <div className="flex items-center justify-center gap-10 me-16">
                        <NavLink to="/">
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-green-600"} >Accueil</span>
                            )}
                        </NavLink>

                        <NavLink to="/beers">
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-green-600"} >Bières</span>
                            )}
                        </NavLink>

                        <NavLink to="/breweries">
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-green-600"} >Brasseries</span>
                            )}
                        </NavLink>
                        <NavLink to="/beers/create">
                            {({ isActive }) => (
                                <span className={isActive ? "text-white font-bold" : "text-gray-300 hover:text-green-600"} >Nouvelle bière</span>
                            )}
                        </NavLink>
                    </div>
                    <div className="flex justify-center gap-5  ">
                        <NavLink to="/login">
                            <ArrowButton color="white" text="Se connecter"/>
                        </NavLink>

                        <NavLink to="/signup">
                            <ArrowButton color="white" text="S'inscrire"/>
                        </NavLink>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;