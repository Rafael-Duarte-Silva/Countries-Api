import styles from './Country.module.css';

import { useCountry } from './hooks/useCountry';

import { Link } from 'react-router-dom';
import { IconBack } from './components/IconBack';
import { SkeletonCountry } from './components/SkeletonCountry';
import { Error } from '../../components/Error';

import {
    nativeName,
    currencies,
    languages,
    topLevelDomain
} from './utils';

export const Country = () => {
    const { data, isLoading, isError } = useCountry();

    return (
        <div className={styles.containerPage}>
            <Link className={styles.containerBack} to="/">
                <IconBack className={styles.containerBack__icon} />

                <span className={styles.containerBack__text}>Back</span>
            </Link>

            {isError && <Error />}

            {isLoading && <SkeletonCountry />}

            {!isLoading && data?.data.map((country, index) => (
                <section className={styles.containerCountry} key={index}>
                    <img
                        className={styles.containerCountry__image}
                        src={country.flags.svg}
                        alt={`${country.name.common}'s flag`}
                    />

                    <div className={styles.containerCountryInformations}>
                        <h1
                            className={styles.containerCountryInformations__title}
                        >
                            {country.name.common}
                        </h1>

                        <div className={styles.countryInformations}>
                            <div>
                                <p className={styles.countryInformations__text}>
                                    <b>Native Name:</b> <span lang={languages(country.languages)}>{nativeName(country.name.nativeName)}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Population:</b> <span>{country.population.toLocaleString('en-US')}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Region:</b> <span>{country.region}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Sub Region:</b> <span>{country.subregion}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Capital:</b> <span>{country.capital}</span>
                                </p>
                            </div>

                            <div>
                                <p className={styles.countryInformations__text}>
                                    <b>Top Level Domain:</b> <span>{topLevelDomain(country.tld)}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Currencies:</b> <span>{currencies(country.currencies)}</span>
                                </p>
                                <p className={styles.countryInformations__text}>
                                    <b>Languages:</b> <span>{languages(country.languages)}</span>
                                </p>
                            </div>

                        </div>

                        {country.borders && (
                            <div className={styles.borderCountries}>
                                <h2 className={styles.borderCountries__title}>Border Countries:</h2>

                                {country.borders.map((bordersCountries, index) => (
                                    <Link
                                        className={styles.borderCountries__link}
                                        key={index}
                                        to=""
                                    >
                                        {bordersCountries}
                                    </Link>
                                ))
                                }
                            </div>
                        )}
                    </div>
                </section>
            ))
            }
        </div>
    );
}