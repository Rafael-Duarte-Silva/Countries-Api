import { useEffect, useState } from "react";

import styles from '../ContainerCountries.module.css';

export const useInfiniteScroll = () => {
    const [countrylength, setCountrylength] = useState<number>(15);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver((entries) => {
            if(entries.some((entry) => entry.isIntersecting)){
                setCountrylength((countrylengthInsideState) => countrylengthInsideState + 15);
            }
        });

        intersectionObserver.observe(document.getElementsByClassName(`${styles.infiniteScrollTarget}`)[0]);

        return () => intersectionObserver.disconnect();
    }, []);

    return { countrylength };
};