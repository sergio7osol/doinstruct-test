export async function getEmployeesList() {
	try {
		const response = await fetch('/api/employees', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token,
				'x-api-key': xApiKey
			},
			body: employee
		});

		if (!response.ok) {
			throw new Error('Failed to fetch protected data');
		}

		const data = await response.json();
		console.log('Protected data:', data);
		return data;
	} catch (error) {
		console.error('Error fetching employees:', error);
	}
}