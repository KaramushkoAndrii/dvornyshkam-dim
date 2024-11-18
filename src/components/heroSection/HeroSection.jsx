
import { useTranslation } from 'react-i18next';


import './heroSection.scss';


const HeroSection = () => {

    const { t } = useTranslation();

    return (
        <section className='hero'>
            <h1 style={{visibility: 'hidden', position: 'absolute'}}>Притулок для тварин dvornyashkam_dim</h1>
            <h2 className='hero__title'>{t('hero_section.title')}</h2>
            <h3 className='hero__description'>{t('hero_section.sub-title')}</h3>
        </section>
    )
}

export default HeroSection;