import { ArrowDownRight, ArrowUpRight } from "lucide-react";

function StatCard({ title, value, description, trend, trendType, icon: Icon }) {
  const up = trendType === "up";
  return <div className="surface p-5"><div className="flex items-start justify-between"><div><p className="text-xs font-medium text-slate-500">{title}</p><p className="mt-3 text-2xl font-bold tracking-tight text-slate-950">{value}</p></div><div className="rounded-lg bg-indigo-50 p-2.5 text-indigo-600"><Icon size={18} /></div></div><div className="mt-4 flex items-center gap-2 text-[11px]"><span className={`inline-flex items-center gap-0.5 font-bold ${up ? "text-emerald-600" : "text-rose-600"}`}>{up ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}{trend}</span><span className="text-slate-400">{description}</span></div></div>;
}

export default StatCard;