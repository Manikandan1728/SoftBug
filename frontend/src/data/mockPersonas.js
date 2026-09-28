export const personas = [
	{ id: "beginner", name: "Beginner User", shortName: "Beginner", description: "Low technical confidence and needs clear guidance.", traits: ["Explores carefully", "Needs context", "Follows visible cues"], focus: "Navigation, labels, discoverability", simulations: 42, score: 78.4, icon: "Compass", color: "sky" },
	{ id: "impatient", name: "Impatient User", shortName: "Impatient", description: "Moves quickly and abandons flows that feel slow or unclear.", traits: ["Fast decisions", "Low tolerance", "Task focused"], focus: "Efficiency, feedback, task completion", simulations: 38, score: 81.7, icon: "Zap", color: "amber" },
	{ id: "elderly", name: "Elderly User", shortName: "Elderly", description: "Benefits from readable layouts, generous controls, and plain language.", traits: ["Reads slowly", "Needs contrast", "Prefers consistency"], focus: "Readability, controls, hierarchy", simulations: 26, score: 73.2, icon: "HeartHandshake", color: "rose" },
	{ id: "technical", name: "Technical User", shortName: "Technical", description: "Confident user who expects predictable, efficient interfaces.", traits: ["Scans deeply", "Uses shortcuts", "Notices edge cases"], focus: "Information architecture, states, errors", simulations: 31, score: 89.6, icon: "Terminal", color: "violet" },
	{ id: "vision", name: "Visually Impaired User", shortName: "Accessibility", description: "Tests semantic structure and experiences beyond visual styling.", traits: ["Uses assistive tech", "Needs semantics", "Keyboard oriented"], focus: "Accessibility, focus, semantics", simulations: 21, score: 68.9, icon: "EyeOff", color: "emerald" },
	{ id: "mobile", name: "Mobile User", shortName: "Mobile", description: "Uses a compact touch viewport with interruptions and variable speed.", traits: ["Touch first", "Small viewport", "On the move"], focus: "Responsive layout, touch, performance", simulations: 35, score: 85.1, icon: "Smartphone", color: "indigo" },
];

export default personas;
