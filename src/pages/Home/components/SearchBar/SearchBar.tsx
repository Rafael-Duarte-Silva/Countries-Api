import styles from './SearchBar.module.css';

import { RefObject } from 'react';

import { useSearchBar } from './hooks/useSearchBar';

import { IconSearch } from './components';

type SearchBarProps = {
    onSearchEvent: (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLOrSVGElement>) => void,
    inputSearchRef: RefObject<HTMLInputElement>,
}

export const SearchBar = ({onSearchEvent, inputSearchRef}: SearchBarProps) => {
    const { onChange, value } = useSearchBar();

    return (
        <label className={styles.searchBar}>
            <IconSearch className={styles.searchBar__icon} onSearchEvent={onSearchEvent}/>

            <input 
                className={styles.searchBar__input}
                name="searchInput"
                type="text" 
                placeholder="Search for a country..."
                autoComplete="off"
                onKeyDown={onSearchEvent}
                ref={inputSearchRef}
                onChange={onChange}
                value={value}
            />
        </label>
    )
}