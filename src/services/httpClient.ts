const baseUrl = 'https://dummyjson.com';

const httpClient = async <T>(url: string, options: RequestInit): Promise<T> => {
	const response = await fetch(baseUrl + url, {
		...options,
		headers: {
			'Content-Type': 'application/json',
			...{ ...(options.headers ?? {}) },
		},
	});
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	}
	return response.json();
};
export default httpClient;
