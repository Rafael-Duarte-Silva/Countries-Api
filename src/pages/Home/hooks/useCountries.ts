import { useState, ChangeEvent, useRef, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useLocation } from "react-router-dom";

import { Countries } from "../types/Countries";

import { customSelectOptions } from "../consts";

import { countriesByNameService,
        countriesByRegionService,
        allCountriesService   
    } from '../services';

export const useCountries = () => {
    const [active, setActive] = useState(false);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const [selectedValue, setSelectedValue] = useState<string>('Filter by Region');
    const [query, setQuery] = useState<string>('');

    const inputSearchRef = useRef<HTMLInputElement>(null);
    
    const navigate = useNavigate();

    document.title = `Country Api`;

    const {data, refetch, isLoading, isError} = useQuery({
        staleTime: 1000 * 60 * 30, // 30 seconds
        queryKey: ['Countries'],
        queryFn: async ({signal}) => {
            const config = {
                signal: signal,
                transformResponse: [
                    function(data: string){
                        return JSON.parse(data).map((o: Countries) => ({
                            name: {common: o.name.common},
                            population: o.population,
                            region: o.region,
                            capital: o.capital,
                            flags: {svg: o.flags.svg}
                        }))
                    }
                ]
            }
        
            if(query){
                return countriesByNameService(query, config);
            }
        
            else if(selectedValue !== 'Filter by Region'){
                return countriesByRegionService(selectedValue, config);
            }
        
            else{
                return allCountriesService(config);
            }
        }
    });

    useEffect(() => {
        refetch();
    }, [selectedValue, query]);

    useEffect(() => {
        if(searchParams.get('search')){
            setQuery(searchParams.get('search') || '');

            setSelectedValue('Filter by Region');
        }

        else if(searchParams.get('region')){
            customSelectOptions.forEach((region) => {
                if(searchParams.get('region')?.toString().toLowerCase() === region.toLowerCase()){
                    setSelectedValue(searchParams.get('region') || 'Filter by Region');
                }
            })

            setQuery('');
        }

        else{
            setQuery('');
            setSelectedValue('Filter by Region');
        }
    }, [searchParams.get('region'), searchParams.get('search')]);

    const handleDropDownEvent = () => {
        setActive(!active);
    }

    const handleSearchEvent = (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLOrSVGElement>) => {
        if (event.type === 'click' || (event as React.KeyboardEvent<HTMLInputElement>).key === 'Enter') {
            if(
                inputSearchRef.current?.value && 
                inputSearchRef.current?.value !== searchParams.get('search')
            ){
                navigate(`?search=${inputSearchRef.current?.value}`);
            }
        }
    }

    const handleChangeSelectedValue = (event: ChangeEvent<HTMLInputElement>) => {
        setActive(false);

        if(
            event.target.value && 
            event.target.value !== searchParams.get('region')
        ){
            navigate(`?region=${event.target.value}`);
        }
    }

    return {
        data,
        isLoading,
        isError,
        handleDropDownEvent,
        handleSearchEvent,
        handleChangeSelectedValue,
        selectedValue,
        inputSearchRef,
        active
    };
}