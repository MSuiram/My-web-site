import Cadre from "../components/Cadre";
import CvEntry from "../components/CvEntry";

export default function CV() {
    return (
        <div className="flex flex-col md:flex-row gap-3 p-3">
            <Cadre className="min-w-70 min-h-40 md:min-h-screen"> <h1>Bonjour</h1> </Cadre>
            <div className="flex flex-col gap-3 grow">
                <section>
                    <h1>Bonjour</h1>
                </section>
                <section className="flex flex-col gap-3">
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                    <CvEntry title="Bonjour" employer="oui">ouia</CvEntry>
                </section>
            </div>
        </div>
    )
}