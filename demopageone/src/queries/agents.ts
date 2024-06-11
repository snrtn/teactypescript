import createUseDataHook from '../hooks/createUseDataHook';
import { setAgents } from '../store/agentsSlice';

export const useAgents = createUseDataHook('agents', setAgents);
