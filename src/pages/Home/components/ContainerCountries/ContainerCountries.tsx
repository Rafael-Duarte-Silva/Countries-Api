import styles from './ContainerCountries.module.css';

import { Countries } from '../../types/Countries';

import { Link } from 'react-router-dom';
import { Error } from '../../../../components/Error';
import { SkeletonCountries } from './components/SkeletonCountries';

type ContainerCountriesProps = {
    data: {
        data: Countries[]
    } | undefined,
    isLoading: boolean,
    isError: boolean
}

export const ContainerCountries = ({ data, isLoading, isError }: ContainerCountriesProps) => {
    return (
        <>
            {isError && <Error />}

            {!isError && (
                <div className={styles.containerCountries}>
                    {isLoading && <SkeletonCountries amount={12} />}

                    {data?.data.map((country, index) => (
                        <article className={styles.country} key={index}>
                            <Link
                                className={styles.country__link}
                                to={`/country/${country.name.common}`}
                            >
                                <img
                                    className={styles.country__image}
                                    src={country.flags.svg}
                                    alt={`${country.name.common}'s flag`}
                                    width="890"
                                    height="1080"
                                    loading='lazy'
                                />
                            </Link>

                            <div className={styles.containerCountryInformations}>
                                <h2 className={styles.countryInformations__title}>
                                    {country.name.common}
                                </h2>
                                <p className={styles.countryInformations__text}>
                                    <b>Population:</b> <span>{country.population.toLocaleString('en-US')}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Region:</b> <span>{country.region}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Capital:</b> <span>{country.capital}</span>
                                </p>
                            </div>
                        </article>
                    ))
                    }
                </div>
            )}
        </>
    )
}