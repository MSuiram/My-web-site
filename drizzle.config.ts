import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: "postgresql",
    schema: "./db/schema.ts",
    out: "./drizzle",
    dbCredentials: {
        url: "postgresql://postgres:AZERTY1234@localhost:5432/dbtest",
    },
});