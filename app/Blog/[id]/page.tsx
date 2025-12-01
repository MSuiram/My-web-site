import Cadre from "@/components/Cadre"
import { deletePost, getPost } from "@/lib/blog"
import Link from "next/link"

type BlogPostPageProps = {
    params: Promise<{ id: string }>
}

export default async function BlogPostPage(props: BlogPostPageProps) {
    const id = String((await props.params).id)
    const post = await getPost(id)
    return (
        <div className="flex flex-col gap-3 p-3">
            <Cadre className="flex gap-10">
                <Link className="border block border-black dark:border-white rounded-3xl w-100 " href="./new">New Page</Link>
                <Link className="border block border-black dark:border-white rounded-3xl w-100" href={`/edit/${(await props.params).id}`}>Edit Page</Link>
                <form action={deletePost}>
                    <input type="hidden" name="id" value={id} />
                    <button className="w-40 border border-black dark:border-white rounded-3xl">
                        Delete task
                    </button>
                </form>

            </Cadre>
            <Cadre className="flex flex-col gap-10">
                <h1 className="block text-center">{post.title}</h1>
                <h2 className="block text-center">{post.author}</h2>
                <p className="block text-center">{post.content}</p>
            </Cadre>
        </div>
    )
}