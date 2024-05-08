import api from "../../../services/api";

import { Countries } from "../types/Countries";

export const countriesByRegionService = async (region: string, config: object) => {
    return await api.get<Countries[]>(`/region/${region}`, config);
}