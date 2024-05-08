type Languages = {
    [key: string]: string
}

export const languages = (languages: Languages): string => {
    let concatenation: string = '';

    const languageLength = Object.keys(languages).length;

    Object.keys(languages).map((key, index) => {
        if(languageLength <= 1){
            concatenation += `${languages[key]}`;
        }

        else if(languageLength - 1 === index){
            concatenation += `${languages[key]}`;
        }

        else{
            concatenation += `${languages[key]}, `;
        }
    })

    return concatenation;
}