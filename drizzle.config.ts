import { defineConfig } from 'drizzle-kit';

import {
	DATABASE_URL,
	DATABASE_HOST,
	DATABASE_PORT,
	DATABASE_USER,
	DATABASE_PASSWORD,
	DATABASE
	// @ts-ignore
} from '$env/static/private';

export default defineConfig({
	schema: './src/db/schema.ts',
	out: './src/db/migrations',
	dialect: 'postgresql',
	dbCredentials: {
		url: DATABASE_URL,
		host: DATABASE_HOST,
		port: parseInt(DATABASE_PORT),
		user: DATABASE_USER,
		password: DATABASE_PASSWORD,
		database: DATABASE
		// ssl: {
		//     rejectUnauthorized: true // this was needed for Vercel Postgres
		// }
	}
});
