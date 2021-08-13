import React from 'react';
import PropTypes from 'prop-types';
import './slider.css';


export const Slider = ({min, max, value, id, ...props }) => {
    console.log(min, max, value)

    const slider = document.getElementById('slider');

    slider.oninput = () => {

        console.log("move")
    }
    
  return (
    <>
      <p>Standard sliders</p>
      {value}
      <input
        type="range"
        className={'tfl-slider'}
        {...props}
      />
    </>
  );
};

// These are Storybook UI props not component props 
Slider.propTypes = {
    disabled: PropTypes.bool,
    onInput: PropTypes.func,
};

Slider.defaultProps = {
    disabled: false,
    slidervalue:50,
    min:1,
    max:100,
    value:50,
    onInput: 50,
};
