function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center py-5 px-5 border text-grey-950">
                <div className="flex items-center">
                    <a href="" className="flex">
                        <img src="" alt="logo zythologue" />
                        <span className="self-center text-xl font-bold">Zythologue</span>
                    </a>
                    <div className="flex items-center gap-10 border ms-5">
                        <div>
                            <a href="">Accueil</a>
                        </div>
                        <div>
                            <a href="">Bières</a>
                        </div>
                        <div>
                            <a href="">Brasseries</a>
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <div>
                        <a href="">Se connecter</a>
                    </div>
                    <div>
                        <a href="">S'inscrire</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header