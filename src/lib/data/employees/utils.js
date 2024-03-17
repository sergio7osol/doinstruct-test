import { employeeExamples } from './data';

function generateRandomDate() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const minYear = 1990;
  const year = Math.floor(Math.random() * (currentYear - minYear + 1)) + (currentYear - (currentYear - minYear));
  const maxMonth = currentDate.getMonth() + 1; 
  const month = String(Math.floor(Math.random() * maxMonth) + 1).padStart(2, '0');
  const maxDay = currentDate.getDate(); 
  const day = String(Math.floor(Math.random() * maxDay) + 1).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export function generateRandomEmployee() {
  const { firstName, lastName, language, shirtSize, shoeSize } = employeeExamples;

  return {
    "active": Math.random() < 0.5, 
    "custom1": null,
    "custom2": null,
    "custom3": null,
    "employeeKey": null,
    "firstDay": generateRandomDate(),
    "firstName": firstName[Math.floor(Math.random() * firstName.length)],
    "lastName": lastName[Math.floor(Math.random() * lastName.length)],
    "language": language[Math.floor(Math.random() * language.length)],
    "personalData": {
      "shirt": shirtSize[Math.floor(Math.random() * shirtSize.length)],
      "shoes": shoeSize[Math.floor(Math.random() * shoeSize.length)]
    },
    "phone": null,
    "privacyConfirmed": Math.random() < 0.5, 
    "thirdFactor": null 
  };
}

export function generateRandomEmployees(count) {
  const employees = [];

  for (let i = 0; i < count; i++) {
    employees.push(generateRandomEmployee());
  }

  return employees;
}

