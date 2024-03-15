import { xApiKey } from './authData';

export async function getEmployees() {
	const token = localStorage.getItem('token');
	if (!token) {
		console.error('No token found. Please log in first.');
		return;
	}

	try {
		const employee = JSON.stringify({
			"active": true,
			"custom1": null,
			"custom2": null,
			"custom3": null,
			"employeeKey": null,
			"firstDay": "2023-05-01",
			"firstName": "John",
			"language": "de",
			"lastName": "Doe",
			"personalData": {
					"shirt": "s",
					"shoes": "42"
			},
			"phone": null,
			"privacyConfirmed": true,
			"thirdFactor": null
		});

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
		console.error('Error fetching protected data:', error);
	}
}
