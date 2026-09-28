import { X } from "lucide-react";
import Sidebar from "./Sidebar";

function MobileSidebar({ open, onClose }) {
	if (!open) return null;
	return <div className="fixed inset-0 z-50 lg:hidden"><button className="absolute inset-0 bg-slate-950/30" onClick={onClose} aria-label="Close navigation" /><div className="relative h-full w-[270px] bg-white shadow-2xl"><button onClick={onClose} className="absolute right-3 top-4 z-10 rounded-md p-2 text-slate-500 hover:bg-slate-100" aria-label="Close navigation"><X size={18} /></button><div className="h-full [&>aside]:static [&>aside]:h-full [&>aside]:w-full [&>aside]:border-0"><Sidebar /></div></div></div>;
}

export default MobileSidebar;
