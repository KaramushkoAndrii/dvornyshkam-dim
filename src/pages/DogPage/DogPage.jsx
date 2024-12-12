
import dogsDB from "../../data/dogsDB";

import AnimalsPage from "../../components/animalsPage/AnimalsPage";

import './dogPage.scss';

const DogPage = ({isOpen}) => {

    return (
        <section className="dogPage">
            <AnimalsPage title={'dog-page.title'} data={dogsDB} animal={'more-dogs'} isOpen={isOpen}/>
        </section>
    )
}

export default DogPage;


