
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import Contacts from '../contacts/Contacts';

import {ReactComponent as ArrowRightIcon} from '../../images/arrow-right.svg';

import './navigation.scss';

const Navigation = ({list}) => {

    const { t } = useTranslation();

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prevState => !prevState)
    }

    console.log(t('navigation.about_us'))
    
    return (
        <div className='nav__wrapper'>

            <div className={`burger__menu menu ${menuOpen ? "close" : ""}`} onClick={toggleMenu}>
                <span className='burger__bar'></span>
                <span className='burger__bar'></span>
                <span className='burger__bar'></span>
            </div>


            <nav className={`navigation ${menuOpen ? 'open' : ''}`}>
                <ul className='navigation__list'>
                    {list.map((item, key) => (
                        <li key={key} className='navigation__list-item'>
                            <a href='/'><span>{t(`${item.title}`)}</span> <ArrowRightIcon /></a>
                        </li>
                    ))}
                </ul>

                <Contacts />
            </nav>
        </div>
    )
}

export default Navigation