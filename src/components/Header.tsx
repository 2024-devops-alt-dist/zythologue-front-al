function Header({ title, description }: { title: string, description: string }) {
    return (
        <header className="w-full text-center bg-green-600 md:flex-row md:justify-start">
            <div className="py-10 gap-5">
                <h2 className="text-4xl font-extrabold text-black">{title}</h2>
                <p className="text-black">{description}</p>
            </div>
            <div className="hidden md:flex overflow-hidden">
                <img src={`/src/assets/images/beer_1.jpg`} alt="" className="max-h-80" />
                <img src={`/src/assets/images/beer_barrel_1.jpg`} alt="" className="max-h-80" />
                <img src={`/src/assets/images/beer_3.jpg`} alt="" className="max-h-80" />
                <img src={`/src/assets/images/beer_4.jpg`} alt="" className="max-h-80" />
            </div>

        </header>
    );
} 

export default Header;