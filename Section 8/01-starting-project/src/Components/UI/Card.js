// To import the styles using CSS modules:
import styles from './Card.module.css'; 

const Card = (props) => {
    return <div className={`${styles.card} ${props.className}`}>{props.children}</div>
    // To apply the two CSS styles: one coming from the Card.module.css, and one coming via props.
};

export default Card;

/* Notes: {props.children} will give me the content which has passed 
between the opening and closing tag of the Card component. */