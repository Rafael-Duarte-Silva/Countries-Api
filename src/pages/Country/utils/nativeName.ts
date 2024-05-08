type NativeName = {
    [key: string]: {
        common: string
    }
}

export const nativeName = (nativeName: NativeName): string => {
    return nativeName[Object.keys(nativeName)[0].toString()].common;
}