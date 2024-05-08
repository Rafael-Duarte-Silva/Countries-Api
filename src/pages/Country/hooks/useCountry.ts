import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Country } from "../types/Country";

import { countryByFullNameService } from "../services";

export const useCountry = () => {
    let { countryId } = useParams<string>();

    useEffect(() => {
        document.title = `${countryId} | Country Api`;
    }, [countryId])

    const {data, isLoading, isError} = useQuery({
        queryKey: ['Country'],
        queryFn: async ({signal}) => {
            const config = {
                signal: signal,
                transformResponse: [
                    function(data: string){
                        return JSON.parse(data).map((o: Country) => ({
                            flags: {svg: o.flags.svg},
                            name: o.name,
                            population: o.population,
                            region: o.region,
                            subregion: o.subregion,
                            capital: o.capital,
                            tld: o.tld,
                            currencies: o.currencies,
                            languages: o.languages,
                            borders: o.borders
                        }))
                    }
                ]
            }

            return countryByFullNameService(countryId, config);
        }
    });

    return {
        data,
        isLoading,
        isError
    };
}