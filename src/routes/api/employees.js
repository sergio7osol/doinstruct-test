import { xApiKey } from './authData';
import { getAuthToken } from './auth';
import { generateRandomEmployee } from '/src/lib/data/employees/utils';

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

async function getEmployeesData(count) {
	const results = [];
	const promises = [];

	for (let i = 0; i < count; i++) {
		promises.push(getEmployeeData());
	}

	const allUpdateResults = await Promise.all(promises)
		.then((data) => {
			data.forEach((result) => {
				results.push(result);
			});

			return results;
		})
		.catch((error) => {
			console.error('Error:', error);
		});

	return allUpdateResults;
}

async function employeesUpdate(count) {
	const token = await getAuthToken();

	if (!token) {
		console.error('No token found.');
		return;
	}

	const employeesData = await getEmployeesData(count);

	try {
		const response = await fetch('/api/employees/bulk/import', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
				'x-api-key': xApiKey
			},
			body: JSON.stringify({ rows: employeesData })
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

export async function getProcessingStatus(count) {
	const token = await getAuthToken();

	if (!token) {
		console.error('No token found.');
		return;
	}

	async function getStatusCompleted(id) {
		const response = await fetch(`/api/employees/bulk/${id}`, {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token,
				'x-api-key': xApiKey
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch Bulk Status');
		}

		const processData = await response.json();
		return processData;
	}

	try {
		const { id, href } = await employeesUpdate(count);

		if (!id || !href) {
			console.error('Failed getting processing status.');
			return;
		}

		return getStatusCompleted(id);
	} catch (error) {
		console.error('Error fetching employees:', error);
	}
}

export async function getAllEmployees() {
	const token = await getAuthToken();

	if (!token) {
		console.error('No token found.');
		return;
	}

	try {
		const response = await fetch('/api/employees?limit=10&offset=0', {
			headers: {
				'Content-Type': 'application/json',
				'Authorization': token,
				'x-api-key': xApiKey
			}
		});

		if (!response.ok) {
			throw new Error('Failed to fetch protected data');
		}

		const data = await new Promise((res) => setTimeout(() => res(response.json()), 2000));
		const rowsData = data?.rows || [];

		return rowsData;
	} catch (error) {
		console.error('Error fetching employees:', error);
	}
}
