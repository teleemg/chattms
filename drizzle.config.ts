import { defineConfig } from 'drizzle-kit';

// import {
// 	DATABASE_URL,
// 	DATABASE_HOST,
// 	DATABASE_PORT,
// 	DATABASE_USER,
// 	DATABASE_PASSWORD,
// 	DATABASE
// 	// @ts-ignore
// } from '$env/static/private';

export default defineConfig({
	dialect: 'postgresql',
    schema: './src/db/schema.ts',
	out: './supabase/migrations',
	dbCredentials: {
		host: "localhost",
		port: 54321,
		user: "postgres",
		password: "postgres",
		database: "supabase"
		// ssl: {
		//     rejectUnauthorized: true // this was needed for Vercel Postgres
		// }
	}
});
