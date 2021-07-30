import React from 'react';
import './button.css';
import PropTypes from 'prop-types';

const Button = ({ children, ...args }) => {
    return (
        <button className="btn" { ...args }>
            { children }
        </button>
    )
}

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small','medium','large']),
    label: PropTypes.string.isRequired, 
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    primary: false,
    size: 'medium',
    onClick: undefined,
}

export default Button;