import BeerForm from "../components/BeerForm";
import Header from "../components/Header";

function BeerCreationPage() {
    return (
        <>
            <Header title="Ajouter une nouvelle bière" description="Renseignez les informations et créée une nouvelle bière." />
            <section className="bg-black flex justify-center items-center">
                <BeerForm />
            </section>
        </>
    );
};

export default BeerCreationPage;