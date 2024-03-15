import express from 'express';
import { fetch, error } from '@sveltejs/kit';
import { posts } from '/src/routes/api/authData';

const router = express.Router();

// Define a route to handle GET requests to /api/data
router.get('/', async (req, res) => {
  try {
    // Your logic to fetch data from a database, external API, etc.
    const responseData = { message: 'Data fetched successfully' };
    // Respond with the fetched data
    res.json(responseData);
  } catch (error) {
    console.error('Error fetching data:', error);
    // Handle errors
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

export default router;


export function load1() {
  if (!posts) throw error(404);
  
	return {
		summaries: posts.map((post) => ({
			slug: post.slug,
			title: post.title,
			content: post.content
		}))
	};
}

// export async function load({ params }) {
//     try {
//         const response = await fetch(apiUrl);

//         if (response.ok) {
//             const data = await response.json();
            
//             // Return the data to be passed to the page component
//             return {
//                 props: {
//                     data
//                 }
//             };
//         } else {
//             throw new Error(`Failed to fetch data: ${response.statusText}`);
//         }
//     } catch (error) {
//         return {
//             status: 500,
//             error: error.message
//         };
//     }
// }

