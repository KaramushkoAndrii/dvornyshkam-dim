
import { useTranslation } from 'react-i18next';

import { Link } from 'react-router-dom';

import HelpList from '../../data/helpList';
import Button from '../button/Button';
import { FaPaw } from "react-icons/fa";

import './helpSection.scss';

const HelpSection = ({btnText}) => {

    const { t } = useTranslation();

    return (
        <section className='help'>
            <div className='help__content'>
                <h2>{t('help-section.title')}</h2>
                <p>{t('help-section.description')}</p>
                <ul>
                    {HelpList.map((item, key) => (
                        <li key={key}>
                            <FaPaw />
                            <span>{t(`${item}`)}</span>
                        </li>
                    ))}
                </ul>

                {btnText ? <Link to={'/help'}><Button text={t(btnText)}/></Link> : null}
                
            </div>
        </section>
    )
}

export default HelpSection;