import Cadre from "@/components/Cadre";
import CvEntry from "@/components/CvEntry";
import { getPosts } from "@/lib/blog";
import Link from "next/link";

type BlogsLinksProps = {
    href: string
    title: string
    author: string
}


function BlogsLinks(props: BlogsLinksProps) {
    return (
        <div className="hover:bg-indigo-950 h-full p-4">
            <Link href={props.href}>
                <Cadre className="">
                    <div className="flex flex-row justify-between">
                        <h3>{props.title}</h3>
                        <h4>{props.author}</h4>
                    </div>
                </Cadre>
            </Link>
        </div>
    )
}

export default async function Blog() {
    const posts = await getPosts()
    return (
        <div className="p-3 flex flex-col gap-3">
            <Cadre className="flex gap-10">
                <Link className="border block border-black dark:border-white rounded-3xl w-100 " href="/Blog/new">New Page</Link>
            </Cadre>
            <Cadre className="flex flex-col min-h-screen">
                <h1>Hello</h1>
                {posts.map((post, id) => (
                    <BlogsLinks key={id} href={"/Blog/" + post.id} title={post.title} author={post.author}></BlogsLinks>
                ))}
            </Cadre>
        </div>
    )
}