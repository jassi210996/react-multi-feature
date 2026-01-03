import { useCallback, useEffect, useRef, useState } from 'react';
import httpClient from '../services/httpClient';

type UseFetchOptions = {
	autoFetch?: boolean;
};

const useFetch = <T>(url: string, init?: RequestInit, options?: UseFetchOptions) => {
	const { autoFetch = true } = options || {};
	const [response, setResponse] = useState<T | null>(null);
	const [error, setError] = useState<unknown>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const abortRef = useRef<AbortController | null>(null);

	const fetchData = useCallback(async () => {
		if (abortRef.current) abortRef.current.abort();
		const controller = new AbortController();
		abortRef.current = controller;
		setIsLoading(true);
		setError(null);
		try {
			const data = await httpClient<T>(url, { ...(init ?? {}), signal: controller.signal });
			setResponse(data);
		} catch (err) {
			if ((err as Error).name !== 'AbortError') {
				setError(err);
			}
		} finally {
			setIsLoading(false);
		}
	}, [url, init]);

	useEffect(() => {
		if (autoFetch) {
			fetchData();
		}
		return () => {
			if (abortRef.current) abortRef.current.abort();
		};
	}, [autoFetch, fetchData]);

	return { response, error, isLoading, refetch: fetchData };
};

export default useFetch;
