
import { useTranslation } from 'react-i18next';

import HelpListDetailed from '../../components/helpListDetailed/HelpListDetailed';
import HelpListDetailedData from '../../data/helpListDetailedData';

import './helpPage.scss';


const HelpPage = ({data, isOpen}) => {

    const { t } = useTranslation();

    const {title, description, HelpSection} = data;

    return (
        <section className='help__page'>
            <header className='help__header'>
                <h2>{t(title)}</h2>
                <p>{t(description)}</p>
            </header>
            <HelpSection />

            <ul className='help__detailed'>
                <HelpListDetailed dataList={HelpListDetailedData} translationGroup={"help-list-detailed"} isOpen={isOpen}/>
            </ul>
        </section>
    )

}

export default HelpPage;