'use server'

import { db } from '@/db'
import { tasksTable } from '@/db/index'
import { UUID } from 'crypto'
import { eq } from 'drizzle-orm'
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function getTasks() {
    return await db.select().from(tasksTable)
}

export async function addTask(form: FormData) {
    await db.insert(tasksTable).values({
        poste: String(form.get('poste')),
        employer: String(form.get('employer')),
        description: String(form.get('description'))
    })
    redirect((await headers()).get('referer') ?? '/')
}

export async function removeTask(formData: FormData) {
    const id = formData.get("id") as string;
    if (!id) throw new Error("Missing id");

    await db.delete(tasksTable).where(eq(tasksTable.id, id))
    redirect((await headers()).get('referer') ?? '/')
}

