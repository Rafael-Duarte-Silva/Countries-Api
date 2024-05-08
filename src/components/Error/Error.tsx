import styles from './Error.module.css';

export const Error = () => {
    return (
        <div className={styles.error}>
            <span className={styles.error__text}>Something went wrong</span>
        </div>
    );
}