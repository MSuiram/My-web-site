'use server'

import { headers } from "next/headers"
import { redirect } from "next/navigation"

let tasks: { poste: string, employer: string, description: string }[] = []

export async function getTasks() {
    return tasks
}

export async function addTask(form: FormData) {
    tasks.push({
        poste: String(form.get('poste')),
        employer: String(form.get('employer')),
        description: String(form.get('description'))
    })
    redirect((await headers()).get('referer') ?? '/')
}

export async function deleteTask(id: number) {
    tasks.splice(id, 1)
    redirect((await headers()).get('referer') ?? '/')
}