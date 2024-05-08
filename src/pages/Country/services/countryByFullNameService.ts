import api from "../../../services/api";

import { Country } from "../types/Country";

export const countryByFullNameService = async (fullName: string | undefined, config: object) => {
    return await api.get<Country[]>(`/name/${fullName}?fullText=true`, config);
};