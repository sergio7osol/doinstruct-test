import { xApiKey } from './authData';
import { getAuthToken } from './auth';
import { generateRandomEmployee, generateRandomEmployees } from '/src/lib/data/employees/utils';

async function getEmployeeData() {
	const token = await getAuthToken();

	if (!token) {
		console.error('No token found.');
		return;
	}

	const employee = generateRandomEmployee();

	try {
		const response = await fetch('/api/employees', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
				'x-api-key': xApiKey
			},
			body: JSON.stringify(employee)
		});

		if (!response.ok) {
			throw new Error('Failed to fetch protected data');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching employees:', error);
	}
}

async function employeesUpdate() {
	const token = await getAuthToken();

	if (!token) {
		console.error('No token found.');
		return;
	}

	const employee = generateRandomEmployee();

	try {
		const response = await fetch('/api/employees', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
				'x-api-key': xApiKey
			},
			body: JSON.stringify(employee)
		});

		if (!response.ok) {
			throw new Error('Failed to fetch protected data');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error fetching employees:', error);
	}
}

// // Handle the responses
// responses.forEach((response, index) => {
// 	if (response) {
// 		// Do something with the response
// 	} else {
// 		// Handle failed requests
// 	}
// });
