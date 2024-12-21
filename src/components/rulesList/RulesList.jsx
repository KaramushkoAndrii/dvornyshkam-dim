
import { useTranslation } from 'react-i18next';
import Accordion from '../accordion/Accordion';

import './rulesList.scss';

const RulesList = ({data, accordionData}) => {

    const { t } = useTranslation();

    const {title, description} = data;

    return (
        <div className='rules'>
            <h2>{t(title)}</h2>
            <p>{t(description)}</p>

            <Accordion data={accordionData}/>
        </div>
    )
}

export default RulesList;