import { xApiKey, email, password } from './authData';

export async function getAuthToken() {
	try {
		const response = await fetch('/api/auth/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-api-key': xApiKey
			},
			body: JSON.stringify({ email, password })
		});

		if (!response.ok) {
			throw new Error('Failed to login');
		}

		const { token, expiresIn } = await response.json();

		localStorage.setItem('token', token);
		localStorage.setItem('expiresIn', expiresIn);

		return token;
	} catch (error) {
		console.error('Error logging in:', error);
		return null;
	}
}
