import Cadre from "@/components/Cadre"
import { editPost, getPost } from "@/lib/blog"

type BlogPostPageProps = {
    params: Promise<{ id: string }>
}

export default async function EditBlog(props: BlogPostPageProps) {
    const id = String((await props.params).id)
    const post = await getPost(id)
    return (
        <div className="p-3">
            <Cadre className="h-screen">
                <h1>Hello</h1>
                <form className="flex flex-col md:flex-row justify-between" action={editPost}>
                    <input type="hidden" name='id' value={post.id}></input>
                    <label>Title : <input className="border rounded-3xl" name='title' defaultValue={post.title}></input></label>
                    <label>Author : <input className="border rounded-3xl" name='author' defaultValue={post.author}></input></label>
                    <label>Content : <textarea className="border rounded-3xl w-100 h-100" name='content' defaultValue={post.content}></textarea></label>
                    <button className="border rounded-3xl w-18">Save</button>
                </form>
            </Cadre>
        </div>
    )
}