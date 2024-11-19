
import { useTranslation } from 'react-i18next';

import './modal.scss';

const Modal = ({isModalOpen, isClose}) => {
    const { t } = useTranslation();

    return (
        <div className={`modal-container ${isModalOpen ? 'modal-open' : ''}`}>
            <div className='modal'>
                <header className='modal__header'>
                    <h2 className='modal__title'>{t('modal.title')}</h2>
                    <span className='modal__close' onClick={isClose}>X</span>
                </header>
            </div>
        </div>
    )
}

export default Modal;