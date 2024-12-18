
import { useTranslation } from 'react-i18next';


import SocialList from '../../components/contacts/SocialList';
import ContactForm from '../../components/contactForm/ContactForm';
import ContactFormData from '../../data/contactFormData';

import './contactPage.scss';


const ContactPage = ({data, social}) => {

    const {title, header, headerContent, socialHeader} = data;
    const { t } = useTranslation();

    return (
        <section className='contact__page'>
            <h2 className='page__title'>{t(title)}</h2>

            <div className="contact__adres">
                <span className="contact__header">{t(header)}</span>
                <p className="contact__content">{t(headerContent)}</p>
            </div>
            <div className="contact__social">
                <span className="contact__header">{t(socialHeader)}</span>
                <SocialList data={social} />
            </div>

            <ContactForm data={ContactFormData}/>
        </section>
    )
}

export default ContactPage;