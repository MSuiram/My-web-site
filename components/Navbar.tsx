import { getCurrentUser } from "@/lib/user"
import Link from "next/link"
import { ReactNode } from "react"

type NavLinksProps = {
    href: string
    children: ReactNode
}

function NavLinks(props: NavLinksProps) {
    return (
        <div className="hover:bg-indigo-950 h-full p-4">
            <Link href={props.href}>{props.children}</Link>
        </div>
    )
}

export default async function Navbar() {
    const user = await getCurrentUser()
    if (!user) {
        return <p>You need to log in.</p>
    }
    return (
        <nav className="bg-gradient-to-b from-blue-900 to-blue-950">
            <div className="flex flex-row">
                <NavLinks href="/">Acceuil</NavLinks>
                <NavLinks href="/CV">CV</NavLinks>
                <NavLinks href="/Blog">Blog</NavLinks>
            </div>
        </nav>
    )
}