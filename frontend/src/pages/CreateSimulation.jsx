import { useNavigate } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import SimulationForm from "../components/simulations/SimulationForm";
function CreateSimulation() { const navigate = useNavigate(); return <MainLayout><div className="mb-6"><p className="eyebrow">New run</p><h1 className="mt-2 text-2xl font-bold text-slate-950">Create simulation</h1><p className="mt-1 text-sm text-slate-500">Configure a focused test of your website with simulated users.</p></div><SimulationForm onComplete={() => navigate("/simulations/SIM-2026-00129/live")} /></MainLayout>; }
export default CreateSimulation;