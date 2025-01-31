

import { useTranslation } from "react-i18next";
import { motion } from "motion/react";


import Accordion from "../../components/accordion/Accordion";
import Button from "../../components/button/Button";
import { slideFromLeft, slideFromBottom } from "../../components/Animations";

import './advisePage.scss';

const AdvisePage = ({isOpen, title, data, content, btnText}) => {
    
    const { t } = useTranslation();
    
    
    return (
        <section className="advise__page">
            <motion.h2 {...slideFromLeft} className="page__title">{t(title)}</motion.h2>

            <Accordion data={data}/>

            <motion.p {...slideFromBottom} className="advise__content">{t(content)}</motion.p>

            <Button text={t(btnText)} onClick={isOpen}/>
        </section>
    )
}

export default AdvisePage;