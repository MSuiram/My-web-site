'use server'

import { db } from "@/db"
import { eq } from "drizzle-orm"
import { blogsTable } from '@/db/index'
import { headers } from "next/headers"
import { redirect } from "next/navigation"

export async function getPosts() {
    return await db.select().from(blogsTable)
}

export async function getPost(id: string) {
    const results = await db.select().from(blogsTable).where(eq(blogsTable.id, id))
    return results[0]
}

export async function createPost(form: FormData) {
    await db.insert(blogsTable).values({
        title: String(form.get('title')),
        author: String(form.get('author')),
        content: String(form.get('content'))
    })
    redirect((await headers()).get('referer') ?? '/')
}

export async function editPost(form: FormData) { }

export async function deletePost(formData: FormData) {
    const id = formData.get("id") as string;
    if (!id) throw new Error("Missing id");

    await db.delete(blogsTable).where(eq(blogsTable.id, id))
    redirect("/Blog")
}