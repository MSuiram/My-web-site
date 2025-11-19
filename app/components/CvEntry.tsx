import { ReactNode } from "react"

type CvEntry = {
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (
        <div className="border-2 border-black dark:border-white dark:bg-zinc-800 rounded-3xl p-4">
            <div className="flex flex-row justify-between">
                <h3>{props.title}</h3>
                <h4>{props.employer}</h4>
            </div>
            {props.children}
        </div>
    )
}