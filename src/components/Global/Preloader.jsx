import styles from '@/styles/Preloader.css';

export default function ({ width, height }) {
    return (
        <div className={styles.spinnerContainer}>
            <div
                className={styles.loadingSpinner}
                style={{ width: `${width}`, height: `${height}` }}
            ></div>
        </div>
    );
};
