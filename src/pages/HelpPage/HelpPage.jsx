
import { useTranslation } from 'react-i18next';

import HelpListDetailed from '../../components/helpListDetailed/HelpListDetailed';
import HelpListDetailedData from '../../data/helpListDetailedData';

import './helpPage.scss';


const HelpPage = ({data}) => {

    const { t } = useTranslation();

    const {title, description, HelpSection} = data;

    return (
        <section className='help__page'>
            <h2>{t(title)}</h2>
            <p>{t(description)}</p>
            <HelpSection />

            <ul>
                <HelpListDetailed dataList={HelpListDetailedData} translationGroup={"help-list-detailed"} />
            </ul>
        </section>
    )

}

export default HelpPage;