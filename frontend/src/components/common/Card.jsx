function Card({ children, className = "", title, action }) {
  return <section className={`surface ${className}`}>{(title || action) && <div className="flex items-start justify-between border-b border-slate-100 px-5 py-4"><div>{title && <h3 className="text-sm font-bold text-slate-900">{title}</h3>}</div>{action}</div>}<div className="p-5">{children}</div></section>;
}

export default Card;