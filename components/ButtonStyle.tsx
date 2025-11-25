import { Children, ReactNode } from "react"

type ButtonStyle = {
    children: ReactNode
    className: string
}

export default function ButtonStyle(props: ButtonStyle) {
    return (
        <div className={props.className}>
            <div className="border-2 border-black dark:border-white rounded-3xl m-4 ju">
                {props.children}
            </div>
        </div>
    )
}