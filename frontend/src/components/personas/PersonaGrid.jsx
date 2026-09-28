import PersonaCard from "./PersonaCard";
function PersonaGrid({ personas }) { return <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{personas.map((persona) => <PersonaCard key={persona.id} persona={persona} />)}</div>; }
export default PersonaGrid;
