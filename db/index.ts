import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle(process.env.DATABASE_URL!)

import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const tasksTable = pgTable('tasks', {
    id: uuid().defaultRandom().primaryKey(),
    poste: text().notNull(),
    employer: text().notNull(),
    description: text().notNull(),
})

export const blogsTable = pgTable('blogs', {
    id: uuid().defaultRandom().primaryKey(),
    title: text().notNull(),
    author: text().notNull(),
    content: text().notNull(),
})