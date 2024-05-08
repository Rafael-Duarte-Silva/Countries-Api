import api from "../../../services/api";

import { Countries } from "../types/Countries";

export const countriesByNameService= async (name: string, config: object) => {
    return await api.get<Countries[]>(`/name/${name}`, config);
}