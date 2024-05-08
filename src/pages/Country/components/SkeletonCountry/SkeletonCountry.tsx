import styles from './SkeletonCountry.module.css';

export const SkeletonCountry = () => {
    return (
        <div className={styles.containerSkeleton}>
            <div className={styles.containerSkeleton__image} />

            <div className={styles.containerSkeletonInformations}>
                <div className={styles.containerSkeletonInformations__title}></div>

                <div className={styles.skeletonInformations}>
                    <div>
                        {[...Array(5)].map((_, index) => (
                            <div key={index} className={styles.skeletonInformations__text}></div>
                        ))
                        }
                    </div>

                    <div>
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className={styles.skeletonInformations__text}></div>
                        ))
                        }
                    </div>
                </div>

                <div className={styles.skeletonBorderCountries}>
                    <div className={styles.skeletonBorderCountries__title}></div>

                    {[...Array(3)].map((_, index) => (
                        <div key={index} className={styles.skeletonBorderCountries__link}></div>
                    ))
                    }
                </div>
            </div>
        </div>
    )
}