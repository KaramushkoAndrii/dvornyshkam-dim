
import { useTranslation } from 'react-i18next';


import './helpListDetailed.scss';


const HelpListDetailed = ({dataList, translationGroup}) => {

    const { t } = useTranslation();

    return (
        <>
            {dataList.map((item, key) => (
                <li key={key}>
                    <h3>{t(`${translationGroup}.${item.header}`)}</h3>
                    <p>{t(`${translationGroup}.${item.description}`)}</p>
                    <p className='sub__text'>{t(`${translationGroup}.${item.subDescription}`)}</p>
                    {item.type === "button" ? 
                        <button onClick={""}>{item.linkContent}</button> : 
                        <a href={item.src} target='_blank'>{item.linkContent}</a>}
                </li>
            ))}
        </>
    )
}


export default HelpListDetailed;