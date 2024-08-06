/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:q4pHA2vydTks@ep-jolly-bar-a5gqdxbc.us-east-2.aws.neon.tech/AI-content-generator?sslmode=require',
    }
  };