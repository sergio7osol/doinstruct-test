import { xApiKey, email, password } from './authData';

export async function getAuthToken() {
	try {
		const token = localStorage.getItem('token');
		const expiresIn = localStorage.getItem('expiresIn');

		console.log('expiresIn: ', expiresIn);

		if (!token) {
			throw new Error('No token found. Get it first.');
		}

		return token;
	} catch (error) {
		const response = await fetch('/api/auth/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': xApiKey
			},
			body: JSON.stringify({ email, password })
		});

		if (!response.ok) {
			throw new Error('Failed to get a token.');
		}

		const { token, expiresIn } = await response.json();

		localStorage.setItem('token', token);
		localStorage.setItem('expiresIn', expiresIn);
	}
}

export async function clearToken() {
	localStorage.removeItem('token');
	localStorage.removeItem('expiresIn');
}
