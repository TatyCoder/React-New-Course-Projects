// import React from 'react';  // I can get rid of this import because I'm not dealing with JSX in this file anymore.
import styled from 'styled-components';

// import './Button.css';

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

// Rebuilding the const Button using styled components:
const Button = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;
  
  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

export default Button;

/* Notes: styled is an object I'm importing from styled-components;  
and button is simply a method on this styled object. This button 
method will return a new button component with the styles I provide 
between the back ticks, which I copied from the Button.css file, 
but getting rid of any selectors, and for pseudo selectors I'll 
use the & symbol instead of .button.
I can still add onClick prop or set a type because that will all 
be forwarded by the styled-components package. */