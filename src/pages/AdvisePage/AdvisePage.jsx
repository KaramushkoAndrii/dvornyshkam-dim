

import { useTranslation } from "react-i18next";


import Accordion from "../../components/accordion/Accordion";
import AdviseAccordionData from "../../data/adviseAccordionData";

import './advisePage.scss';

const AdvisePage = ({isOpen, title}) => {
    
    const { t } = useTranslation();
    
    
    return (
        <section className="advise__page">
            <h2 className="page__title">{t(title)}</h2>


            <Accordion data={AdviseAccordionData}/>
        </section>
    )
}

export default AdvisePage;