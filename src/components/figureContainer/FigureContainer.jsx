
import { useTranslation } from 'react-i18next';

import './figureContainer.scss';


const FigureContainer = ({src, alt, text}) => {

    const { t } = useTranslation();

    return (
        <figure className='figure-container'>
            <img src={src} alt={alt} />
            <figcaption>{t(`${text}`)}</figcaption>
    </figure>
    )
}

export default FigureContainer;