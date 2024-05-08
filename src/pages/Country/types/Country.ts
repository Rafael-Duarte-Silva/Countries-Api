export type Country = {
    flags: {svg: string},
    name: {
        common: string
        nativeName: {[index: string]: {common: string}}
    },
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    tld: string[],
    currencies: {[index: string]: {name: string}},
    languages: {[index: string]: string},
    borders: string[]
}