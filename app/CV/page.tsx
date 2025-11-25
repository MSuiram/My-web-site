import { getTasks, addTask, removeTask } from "@/lib/task";
import Cadre from "../../components/Cadre";
import CvEntry from "../../components/CvEntry";
import ButtonStyle from "@/components/ButtonStyle";

export default async function CV() {
    const tasks = await getTasks()
    return (
        <div className="flex flex-col md:flex-row gap-3 p-3">
            <Cadre className="min-w-70 min-h-40 md:min-h-screen"> <h1>Bonjour</h1> </Cadre>
            <div className="flex flex-col gap-3 grow">
                <section>
                    <Cadre className="">
                        <form className="flex flex-col md:flex-row justify-between" action={addTask}>
                            <label>Poste : <input className="border rounded-3xl" name='poste'></input></label>
                            <label>Employeur : <input className="border rounded-3xl" name='employer'></input></label>
                            <label>Description : <input className="border rounded-3xl" name='description'></input></label>
                            <button className="border rounded-3xl w-18">Enter</button>
                        </form>
                    </Cadre>
                </section>
                <section className="flex flex-col gap-3">
                    {tasks.map((task, id) => (
                        <CvEntry title={task.poste} employer={task.employer} key={id}>
                            <div className="flex flex-row justify-between">
                                {task.description}
                                <form action={removeTask}>
                                    <input type="hidden" name="id" value={task.id} />
                                    <button className="w-40 border border-black dark:border-white rounded-3xl">
                                        Delete task
                                    </button>
                                </form>
                            </div>
                        </CvEntry>))}
                </section>
            </div>
        </div>
    )
}