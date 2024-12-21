

import { useTranslation } from 'react-i18next';

import {ReactComponent as TelegramIcon} from '../../images/telegram.svg';
import Button from '../button/Button';
import './contactForm.scss';

const ContactForm = ({data, isOpen}) => {

    const { t } = useTranslation();

    return (
        <ul className="contactForm">
            {data.map((item, key) => (
                <li key={key} className='contactForm__item'>
                    <p>{item.name}</p>
                    {item.typeHref === "tel" ? 
                        <div>
                            <a href={`${item.typeHref}:${item.number}`}>{item.number}</a>
                            <a href={`${item.tgLink}`} target="_blank" rel="noopener noreferrer"><TelegramIcon /></a>
                        </div> : 
                        <a href={`mailto:${item.link}`}>{item.link}</a>}
                </li>
            ))}
            <Button text={t('buttons.contact')} onClick={isOpen}/>
        </ul>
    )
}

export default ContactForm;