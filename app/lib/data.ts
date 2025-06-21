import postgres from 'postgres';
 
interface Data {
  id: number;
  name: string;
  email: string;
  course: string;
}

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function fetchData() {
  try {
    // Artificially delay a response for demo purposes.
    // Don't do this in production 🙂

    // console.log('Fetching revenue data...');
    // await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Data[]>`SELECT * FROM data`;

    // console.log('Data fetch completed after 3 seconds.');

    return data;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}