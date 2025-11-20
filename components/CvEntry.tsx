import { ReactNode } from "react"
import Cadre from "./Cadre"

type CvEntry = {
    title: string
    employer: string
    children: ReactNode
}

export default function CvEntry(props: CvEntry) {
    return (
        <Cadre className="">
            <div className="flex flex-row justify-between">
                <h3>{props.title}</h3>
                <h4>{props.employer}</h4>
            </div>
            {props.children}
        </Cadre>
    )
}