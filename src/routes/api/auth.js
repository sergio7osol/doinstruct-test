import { xApiKey, email, password } from './authData';

export async function getAuthToken() {
	try {
		const token = localStorage.getItem('token');

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

		const { token, expiresIn, refreshToken } = await response.json();

		localStorage.setItem('token', token);
		localStorage.setItem('expiresIn', expiresIn);
		localStorage.setItem('refreshToken', refreshToken);

		return token;
	}
}

export async function signOut() {
	try {
		const refreshToken = localStorage.getItem('refreshToken');

		if (!refreshToken) {
			console.error('Could not retrieve refreshToken');
			return;
		}

		const response = await fetch('/api/auth/sign-out', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'x-api-key': xApiKey
			},
			body: JSON.stringify({ refreshToken })
		});
		
		if (!response.ok) {
			throw new Error('Failed to sign out.');
		}

		localStorage.removeItem('token');
		localStorage.removeItem('expiresIn');
		localStorage.removeItem('refreshToken');
	} catch (error) {
		console.error('Error signing out:', error);
	}
}
