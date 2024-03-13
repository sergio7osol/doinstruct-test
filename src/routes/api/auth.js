export async function getAuthToken(email, password) {
	try {
		const response = await fetch('/api/auth/sign-in', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        'x-api-key': '0cQxbnE-oweEwHQEs0zlIiAcDYiYMybtCE8Q71h3JsY'
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
