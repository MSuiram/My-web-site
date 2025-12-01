import Cadre from "@/components/Cadre";
import { createPost } from "@/lib/blog";



export default async function NewBlog() {
    return (
        <div className="p-3">
            <Cadre className="h-screen">
                <h1>Hello</h1>
                <form className="flex flex-col md:flex-row justify-between" action={createPost}>
                    <label>Title : <input className="border rounded-3xl" name='title'></input></label>
                    <label>Author : <input className="border rounded-3xl" name='author'></input></label>
                    <label>Content : <textarea className="border rounded-3xl w-100 h-100" name='content'></textarea></label>
                    <button className="border rounded-3xl w-18">Enter</button>
                </form>
            </Cadre>
        </div>
    )
}
