function Header({ title, description, image }: { title: string, description: string, image: string}) {
    return (
        <header className="flex flex-col w-full bg-zinc-800 md:flex-row md:justify-start md:max-h-96 ">
            <img src={`/src/assets/images/${image}`} alt="" className="object-cover md:max-w-[500px]" />
            <div className="px-16 py-20">
                <h2 className="text-6xl font-extrabold text-lime-400 mb-5">{title}</h2>
                <p className="text-white">{description}</p>
            </div>

        </header>
    );
} 

export default Header;