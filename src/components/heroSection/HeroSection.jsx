

import Button from '../button/Button';


import './heroSection.scss';


const HeroSection = () => {
    return (
        <section className='hero'>
            <h1 style={{visibility: 'hidden'}}>Притулок для тварин dvornyashkam_dim</h1>
            <h2 className='hero__title'>Зробіть добро-дайте тварині новий дім!</h2>
            <h3 className='hero__description'></h3>
            <Button text={'Переглянути тварин'} />
        </section>
    )
}

export default HeroSection;