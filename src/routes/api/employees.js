import { xApiKey } from './authData';
import { getAuthToken } from './auth';
import { generateRandomEmployee, generateRandomEmployees } from '/src/lib/data/employees/utils';

// export async function getEmployeesList() {
// 	try {
// 		const response = await fetch('/api/employees', {
// 			method: 'POST',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				'Authorization': token,
// 				'x-api-key': xApiKey
// 			},
// 			body: employee
// 		});

// 		if (!response.ok) {
// 			throw new Error('Failed to fetch protected data');
// 		}

// 		const data = await response.json();
// 		console.log('Protected data:', data);
// 		return data;
// 	} catch (error) {
// 		console.error('Error fetching employees:', error);
// 	}
// }

export async function getEmployeesData() {
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
				'Authorization': token,
				'x-api-key': xApiKey
			},
			body: JSON.stringify(employee)
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

	// const employeesDataList = await Promise.all(
	// 	employees?.map(async (employee) => {
	// 		try {
	// 			const bb = JSON.stringify(employee);
	// 			console.log('bb: ', bb, typeof bb);
	// 			console.log('token: ', token, typeof token);
	// 			console.log('xApiKey: ', xApiKey);
	// 			const response = await fetch('/api/employees', {
	// 				method: 'POST',
	// 				headers: {
	// 					'Content-Type': 'application/json',
	// 					'Authorization': token,
	// 					'x-api-key': xApiKey
	// 				},
	// 				body: bb
	// 			});

	// 			if (!response.ok) {
	// 				throw new Error('Failed to fetch protected data');
	// 			}

	// 			const responseData = await response.json();

	// 			return responseData;
	// 		} catch (error) {
	// 			console.error('Error fetching employee:', error);
	// 			return null;
	// 		}
	// 	})
	// );

	// 	console.log('employeesDataList !!: ', employeesDataList);
	// 	return employeesDataList;
}

// // Handle the responses
// responses.forEach((response, index) => {
// 	if (response) {
// 		// Do something with the response
// 	} else {
// 		// Handle failed requests
// 	}
// });
