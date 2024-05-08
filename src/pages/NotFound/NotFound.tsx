import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={styles.notFound}>
            <h1 className={styles.notFound__title}>404</h1>
            <h2 className={styles.notFound__subtitle}>Not Found</h2>
            <p className={styles.notFound__text}>make sure you are at a valid address</p>

            <Link to={'/'} className={styles.goHome}>GO HOME</Link>
        </div>
    )
};