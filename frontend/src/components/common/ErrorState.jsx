import { AlertTriangle } from "lucide-react";

function ErrorState({ title = "Something went wrong", description = "Try refreshing this view." }) { return <div className="flex flex-col items-center justify-center py-16 text-center"><AlertTriangle className="mb-3 text-rose-500" size={28} /><h3 className="text-sm font-bold text-slate-800">{title}</h3><p className="mt-1 text-xs text-slate-500">{description}</p></div>; }
export default ErrorState;
