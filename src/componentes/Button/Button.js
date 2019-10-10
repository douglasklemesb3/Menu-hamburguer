import React from 'react';
import './Button.scss';

const Button = ({children, funcao}) => {

    return(
        <button onClick={funcao}>{children}</button>
    );
}

export default Button;