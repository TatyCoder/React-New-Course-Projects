import Button from './Button';
import Card from './Card';
import styles from './ErrorModal.module.css';

// Adding the onClick prop to trigger the errorHandler function from inside the ErrorModal, where I have the backdrop and the OK button:
const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onHandleError} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.onHandleError}>Ok</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
