import api from "../../../services/api";

import { Countries } from "../types/Countries";

export const allCountriesService = async (config: object) => {
    return await api.get<Countries[]>('/all', config);
}