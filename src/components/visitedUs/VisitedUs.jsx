

import { useTranslation } from 'react-i18next';
import RulesList from '../rulesList/RulesList';


import './visitedUs.scss';

const VisitedUs = ({data}) => {

    const { t } = useTranslation();

    const {title, visitedHeader, visitedDate, RulesListData , RulesAccordionData} = data;
    return (
        <section className='visitedUs'>
            <h2>{t(title)}</h2>
            <div className="visitedUs__item">
                <p className="visitedUs__item--header">{t(visitedHeader)}</p>
                <p className="visitedUs__item--content">{t(visitedDate)}</p>
            </div>

            <RulesList data={RulesListData} accordionData={RulesAccordionData}/>
        </section>
    )
}

export default VisitedUs;