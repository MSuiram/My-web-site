import { Children, ReactNode } from "react"

type Cadre = {
    children: ReactNode
    className: string
}

export default function Cadre(props: Cadre) {
    return (
        <div className={props.className}>
            <div className="h-full w-full border-2 border-black dark:border-white dark:bg-zinc-800 rounded-3xl p-4">
                {props.children}
            </div>
        </div>
    )
}