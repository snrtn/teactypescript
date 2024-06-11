import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fetchData from './fetchData';

const createUseDataHook = (endpoint: string, actionCreator: any) => {
	return () => {
		const dispatch = useDispatch();

		const queryResult = useQuery({
			queryKey: [endpoint],
			queryFn: () => fetchData(endpoint),
		});

		useEffect(() => {
			if (queryResult.isSuccess) {
				dispatch(actionCreator(queryResult.data));
			}
		}, [queryResult.isSuccess, queryResult.data, dispatch]);

		return queryResult;
	};
};

export default createUseDataHook;
