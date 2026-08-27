import { neon } from "@neondatabase/serverless";

let sql: ReturnType<typeof neon> | null = null;

// Lazily create the Neon client once per function instance (Vercel reuses
// warm instances between invocations, so this avoids reconnecting every
// request without needing a connection-pool of our own).
export function getDb() {
  if (!sql) {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error("DATABASE_URL is not set");
    }
    sql = neon(connectionString);
  }
  return sql;
}
