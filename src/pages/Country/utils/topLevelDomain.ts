type TopLevelDomain = string[];

export const topLevelDomain = (tld: TopLevelDomain): string => {
    let concatenation: string = '';

    const currenciesLength = tld.length;

    tld.map((value, index) => {
        if(currenciesLength <= 1){
            concatenation += `${value}`;
        }

        else if(currenciesLength - 1 === index){
            concatenation += `${value}`;
        }

        else{
            concatenation += `${value}, `;
        }
    })

    return concatenation;
}