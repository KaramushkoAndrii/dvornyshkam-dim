

import './button.scss';


const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick} className='mainButton'>{`${text}`}</button>
    )
}

export default Button;