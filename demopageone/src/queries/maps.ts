import createUseDataHook from '../hooks/createUseDataHook';
import { setMaps } from '../store/mapsSlice';

export const useMaps = createUseDataHook('maps', setMaps);
