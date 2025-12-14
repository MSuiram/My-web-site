import Cadre from "@/components/Cadre";
import { login, register } from "@/lib/user";

export default async function Home() {
    return (
        <div className="flex flex-col md:flex-row gap-3 p-3">
            <Cadre className="">
                <form className="flex flex-col md:flex-row justify-between" action={register}>
                    <label>Email : <input className="border rounded-3xl" name='login'></input></label>
                    <label>Mot de passe : <input className="border rounded-3xl" name='password'></input></label>
                    <button className="border rounded-3xl w-18">Enregistre</button>
                </form>
                <form className="flex flex-col md:flex-row justify-between" action={login}>
                    <label>Email : <input className="border rounded-3xl" name='login'></input></label>
                    <label>Mot de passe : <input className="border rounded-3xl" name='password'></input></label>
                    <button className="border rounded-3xl w-18">Connecte</button>
                </form>
            </Cadre>
        </div>
    )
}