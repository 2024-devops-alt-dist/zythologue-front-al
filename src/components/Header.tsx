import { Link, NavLink } from "react-router"

function Header() {
    return (
        <header>
            <nav className="sticky z-10 top-0 w-100 flex justify-between items-center py-5 px-5 border text-gray-950 bg-white">
                <div className="flex items-center">
                    <Link to="" className="flex justify-between gap-5">
                        <img src="/public/zythologue_logo.jpg" alt="logo zythologue" className="max-h-10"/>
                        <span className="self-center text-xl font-bold">Zythologue</span>
                    </Link>
                    <div className="flex items-center gap-10 ms-10">
                        <div>
                            <NavLink to="/">Accueil</NavLink>
                        </div>
                        <div>
                            <NavLink to="/beers">Bières</NavLink>
                        </div>
                        <div>
                            <NavLink to="/breweries">Brasseries</NavLink>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center gap-5  ">
                    <div>
                        <NavLink to="/login">
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 font-medium text-gray-950 duration-500  border-gray-950">
                                <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Se connecter</div>
                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 text-gray-950 ">                                    
                                    <img src="/src/assets/icons/arrow_right.svg" alt="" className="text-gray-950"/>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/signup">
                            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 font-medium text-gray-950 duration-500  group-hover:border ">
                                <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">S'inscrire</div>
                                <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 text-gray-950 ">                                    
                                    <img src="/src/assets/icons/arrow_right.svg" alt="" className="text-gray-950"/>
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header