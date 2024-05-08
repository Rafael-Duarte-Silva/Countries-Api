import styles from './Home.module.css';

import { useCountries } from './hooks/useCountries';

import { SearchBar } from './components/SearchBar';
import { CustomSelect } from './components/CustomSelect';
import { ContainerCountries } from './components/ContainerCountries';

export const Home = () => {
    const {
        data,
        isLoading,
        isError,
        handleDropDownEvent,
        handleSearchEvent,
        handleChangeSelectedValue,
        selectedValue,
        inputSearchRef,
        active
    } = useCountries();

    return (
        <>
            <div className={styles.containerFilter}>
                <SearchBar 
                    inputSearchRef={inputSearchRef}
                    onSearchEvent={handleSearchEvent}
                />

                <CustomSelect
                    onChange={handleChangeSelectedValue} 
                    selectedValue={selectedValue}
                    onClick={handleDropDownEvent}
                    active={active}
                />
            </div>

            <ContainerCountries 
                data={data} 
                isLoading={isLoading}
                isError={isError}
            />
        </>

    );
}