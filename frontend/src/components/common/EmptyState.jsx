import { Inbox } from "lucide-react";

function EmptyState({ title = "Nothing here yet", description = "There is no data to display." }) {
  return <div className="flex flex-col items-center justify-center px-6 py-16 text-center"><Inbox className="mb-3 text-slate-300" size={30} /><h3 className="text-sm font-bold text-slate-800">{title}</h3><p className="mt-1 max-w-sm text-xs text-slate-500">{description}</p></div>;
}

export default EmptyState;
import { Loader2 } from "lucide-react";

function Loader({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-3">
      <Loader2
        size={28}
        className="animate-spin text-indigo-600"
      />

      <p className="text-sm text-slate-500">{text}</p>
    </div>
  );
}

export default Loader;