const BASE_URL = import.meta.env.VITE_BASE_URL;

export const registerUser = async (data) => {
	console.log(BASE_URL, data);
	const response = await fetch(`${BASE_URL}/api/v1/auth/register`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	return await response.json();
};
