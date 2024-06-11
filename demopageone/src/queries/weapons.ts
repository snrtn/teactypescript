import createUseDataHook from '../hooks/createUseDataHook';
import { setWeapons } from '../store/weaponsSlice';

export const useWeapons = createUseDataHook('weapons', setWeapons);
