export async function getEmployees() {
	const token = localStorage.getItem('token');
	if (!token) {
		console.error('No token found. Please log in first.');
		return;
	}

	try {
		const response = await fetch('https://cms-api.doinstruct.com/employees?limit=5&offset=0', {
			headers: {
				'Authorization': token,
				'x-api-key': '0cQxbnE-oweEwHQEs0zlIiAcDYiYMybtCE8Q71h3JsY' 
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch protected data');
		}

		const data = await response.json();
		console.log('Protected data:', data);
	} catch (error) {
		console.error('Error fetching protected data:', error);
	}
}
