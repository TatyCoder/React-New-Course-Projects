import React from 'react';
// import styled from 'styled-components';  // I can get rid of this import because I'll use CSS Modules.

import styles from './Button.module.css';  // To import from a css file (which need to be renamed) when using CSS Modules.

// Instead of applying a string className I now apply something dynamic and refer to styles, which I'm importing from the css file:
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

// Adding a media query here when I'm using styled components:
// const Button = styled.button`
//   width: 100%;
//   font: inherit;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }
  
//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

export default Button;

/* Notes: styled is an object I'm importing from styled-components;  
and button is simply a method on this styled object. This button 
method will return a new button component with the styles I provide 
between the back ticks, which I copied from the Button.css file, 
but getting rid of any selectors, and for pseudo selectors I'll 
use the & symbol instead of .button.
I can still add onClick prop or set a type because that will all 
be forwarded by the styled-components package. 
When using CSS Modules, styles is an object where I'll have every 
class I defined in the css file as a property; because I then access 
those classes as properties on the imported styles object. */