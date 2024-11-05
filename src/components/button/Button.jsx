

import './button.scss';


const Button = ({text}) => {
    return (
        <a className='mainButton'>{`${text}`}</a>
    )
}

export default Button;