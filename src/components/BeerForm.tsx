
function BeerForm() {
    return (
        <>
            <form action="" method="post">
                <div className="flex flex-col">
                    <label htmlFor="name">Nom :</label>
                    <input id="name" type="text" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400" />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="description">Description :</label>
                    <input id="description" type="text" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="abv">Taux d'alcool(abv) :</label>
                    <input id="abv" type="text" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="ibu">Amertume(ibu) :</label>
                    <input id="ibu" type="text" className="bg-zinc-800 placeholder:text-zinc-400 text-zinc-400 border border-black rounded-md pl-3 pr-28 py-3 transition duration-300 ease focus:outline-none focus:border-green-600 hover:border-green-400"/>
                </div>

                <button type="submit">Créer</button>
            </form>
        </>
    );
};

export default BeerForm;
