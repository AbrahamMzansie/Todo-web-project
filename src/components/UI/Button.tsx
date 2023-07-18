import React from 'react';

import './Button.css';

const Button = (props: { type: string | undefined; 
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
     children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => {
    return (
        <button  className="button" onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;