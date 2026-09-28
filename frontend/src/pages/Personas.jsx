import MainLayout from "../components/layout/MainLayout";
import PersonaGrid from "../components/personas/PersonaGrid";
import personas from "../data/mockPersonas";
function Personas() { return <MainLayout><div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Simulation library</p><h1 className="mt-2 text-2xl font-bold text-slate-950">Personas</h1><p className="mt-1 text-sm text-slate-500">Understand how different users experience your product.</p></div><button className="h-10 rounded-lg border border-slate-200 bg-white px-4 text-xs font-semibold text-slate-700">Create persona</button></div><PersonaGrid personas={personas} /></MainLayout>; }
export default Personas;