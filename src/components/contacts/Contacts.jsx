
import { ContactsLinks, ContactsSocial } from '../../data/contactsList';

import './contacts.scss';


const Contacts = () => {
    return (
        <div  className='contacts'>
            <ul className='contacts__links'>
                <li className='contacts__links-item'>
                    <a href={`mailto:${ContactsLinks[0]}`}>{ContactsLinks[0]}</a>
                </li>
                <li className='contacts__links-item'>
                    <a href={`tel:${ContactsLinks[1]}`}>{ContactsLinks[1]}</a>
                </li>
            </ul>
            <ul className='contacts__social'>
                {ContactsSocial.map((item, key) => (
                    <li key={key} className='contacts__social-item'>
                        <a href={item.href}>{item.icon}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Contacts;