

import { useTranslation } from "react-i18next";


import Accordion from "../../components/accordion/Accordion";
import Button from "../../components/button/Button";

import './advisePage.scss';

const AdvisePage = ({isOpen, title, data, content, btnText}) => {
    
    const { t } = useTranslation();
    
    
    return (
        <section className="advise__page">
            <h2 className="page__title">{t(title)}</h2>

            <Accordion data={data}/>

            <p className="advise__content">{t(content)}</p>

            <Button text={t(btnText)} onClick={isOpen}/>
        </section>
    )
}

export default AdvisePage;