type Currencies = {
    [key: string]: {
        name: string
    }
}

export const currencies = (currencies: Currencies): string => {
    let concatenation: string = '';

    const currenciesLength = Object.keys(currencies).length;

    Object.keys(currencies).map((key, index) => {
        if(currenciesLength <= 1){
            concatenation += `${currencies[key].name}`;
        }

        else if(currenciesLength - 1 === index){
            concatenation += `${currencies[key].name}`;
        }

        else{
            concatenation += `${currencies[key].name}, `;
        }
    })

    return concatenation;
}