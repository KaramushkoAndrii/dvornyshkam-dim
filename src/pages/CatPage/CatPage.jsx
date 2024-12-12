
import catsDB from "../../data/catsDB";
import AnimalsPages from "../../components/animalsPage/AnimalsPage";

const CatPage = ({isOpen}) => {
    return (
        <section className="catPage">
            <AnimalsPages title={'cat-page.title'} data={catsDB} animal={'more-cats'} isOpen={isOpen}/>
        </section>
    )
}

export default CatPage;