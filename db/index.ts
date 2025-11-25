import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle(process.env.DATABASE_URL!)

import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
    id: uuid().defaultRandom().primaryKey(),
    poste: text().notNull(),
    employer: text().notNull(),
    description: text().notNull(),
})