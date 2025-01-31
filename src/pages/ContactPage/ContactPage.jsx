
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import { slideFromLeft, slideFromRight, slideFromBottom, scale } from '../../components/Animations';
import SocialList from '../../components/contacts/SocialList';
import ContactForm from '../../components/contactForm/ContactForm';
import VisitedUs from '../../components/visitedUs/VisitedUs';
import Map from '../../components/map/Map';
import ContactFormData from '../../data/contactFormData';
import VisitedUsDate from '../../data/visitedUsDate';

import './contactPage.scss';


const ContactPage = ({data, social, isOpen}) => {

    const {title, header, headerContent, socialHeader, responseble, sterilaz, tomuch, slogan} = data;
    const { t } = useTranslation();

    return (
        <section className='contact__page'>
            <motion.h2 {...slideFromLeft} className='page__title'>{t(title)}</motion.h2>

            <motion.div {...slideFromRight} className="contact__adres">
                <span className="contact__header">{t(header)}</span>
                <p className="contact__content">{t(headerContent)}</p>
            </motion.div>
            <motion.div {...slideFromBottom} className="contact__social">
                <span className="contact__header">{t(socialHeader)}</span>
                <SocialList data={social} />
            </motion.div>

            <ContactForm data={ContactFormData} isOpen={isOpen}/>

            <motion.div {...scale} className="contact__info">
                <h2 className="contact__info--header">{t(responseble)}<i>{t(sterilaz)}</i></h2>
                <p className="contact__info--content">{t(tomuch)}</p>
                <p className="contact__info--content">{t(slogan)}</p>
            </motion.div>


            <VisitedUs data={VisitedUsDate} />

            <Map data={''}/>
        </section>
    )
}

export default ContactPage;