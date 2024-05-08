import styles from './SkeletonCountries.module.css';

type SkeletonCountriesProps = {
    amount?: number
}

export const SkeletonCountries = ({amount = 1}: SkeletonCountriesProps) => {
    return (
        <>
            {[...Array(amount)].map((_, index) => (
                <div key={index} className={styles.skeletonCountry}/>
            ))
            }
        </>
    )
}