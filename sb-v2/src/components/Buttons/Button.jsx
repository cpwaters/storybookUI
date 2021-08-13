import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, color, border, size, label, standardButtons, ...props }) => {
  const sizeMode = primary ? 'tfl-button--primary' : 'tfl-button--secondary';
  return (
    <>
      <p>Standard Buttons</p>
      <button
        type="button"
        className={['tfl-button', `tfl-button--${size}`, `tfl-button--${standardButtons}-standardButtons`, sizeMode].join(' ')}
        {...props}
      >
        {label}
      </button>
      <p>Colour defined buttons (mix 'n' match)</p>
      <button
        type="button"
        className={['tfl-button', `tfl-button--${size}`, `tfl-button-background-${backgroundColor}`, `tfl-button-color-${color}`, `tfl-button-border-${border}`, sizeMode].join(' ')}
        {...props}
      >
        {label}
      </button>
    </>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.oneOf(['Blue', 'DarkGrey', 'Black','Red','Yellow','White','LightGrey','Green']),
  color: PropTypes.oneOf(['Blue', 'DarkGrey', 'Black','Red','Yellow','White','LightGrey','Green']),
  border: PropTypes.oneOf(['Blue', 'DarkGrey', 'Black','Red','Yellow','White','LightGrey','Green']),
  standardButtons: PropTypes.oneOf(['Blue', 'DarkGrey', 'Black','Red','Yellow','White','LightGrey','Green']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xl']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: 'Blue',
  color: 'White', 
  border: 'none',
  standardButtons: 'Blue',
  primary: true,
  size: 'medium',
  onClick: undefined,
};
