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

export default function Navbar() {
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