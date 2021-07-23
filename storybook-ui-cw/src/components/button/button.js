import React from 'react'
import './button.css';

const Button = ({ children, ...args }) => {
    return (
        <button className="btn" { ...args }>
            { children }
        </button>
    )
}

export default Button;