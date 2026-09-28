const styles = { success: "bg-emerald-50 text-emerald-700 ring-emerald-600/10", warning: "bg-amber-50 text-amber-700 ring-amber-600/10", danger: "bg-rose-50 text-rose-700 ring-rose-600/10", info: "bg-indigo-50 text-indigo-700 ring-indigo-600/10", default: "bg-slate-100 text-slate-600 ring-slate-500/10" };

function Badge({ children, variant = "default", dot = false }) { return <span className={`inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold ring-1 ring-inset ${styles[variant] || styles.default}`}>{dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}{children}</span>; }

export default Badge;