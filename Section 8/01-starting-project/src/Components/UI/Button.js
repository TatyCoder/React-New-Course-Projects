// To import the styles using CSS modules:
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;

/* Notes: If props.type is undefined, the 'button' value will be used as a fallback type 
for the built in button. 
I will have a onClick prop on my Button component, any function received there is just 
passed onto the built in button component through its onClick prop. 
I also want to be able to output some content between the button tags, and I expect to get 
get that content between the tags of my own button, and for that I use {props.children}. */