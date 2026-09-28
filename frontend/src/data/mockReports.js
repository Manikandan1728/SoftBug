export const issues = [
	{ id: "ISS-184", title: "Registration button is difficult to discover", severity: "Major", persona: "Beginner User", frequency: "8/10 sessions", impact: "High", recommendation: "Improve button visibility and placement on the first viewport." },
	{ id: "ISS-183", title: "Checkout process contains unnecessary steps", severity: "Critical", persona: "Impatient User", frequency: "7/10 sessions", impact: "High", recommendation: "Reduce checkout to three focused steps and preserve entered data." },
	{ id: "ISS-182", title: "Form errors are not announced clearly", severity: "Major", persona: "Visually Impaired User", frequency: "6/10 sessions", impact: "High", recommendation: "Connect error messages to fields and announce them on submit." },
	{ id: "ISS-181", title: "Navigation label does not match user expectation", severity: "Minor", persona: "Technical User", frequency: "4/10 sessions", impact: "Medium", recommendation: "Use clearer IA language and add an active location indicator." },
	{ id: "ISS-180", title: "Product filter resets after returning to results", severity: "Informational", persona: "Mobile User", frequency: "3/10 sessions", impact: "Low", recommendation: "Persist filters across navigation and back actions." },
];

export const report = { id: "SIM-2026-00128", project: "E-Commerce Website", score: 84.6, critical: 4, major: 12, minor: 18, informational: 9, completion: 82, pages: 14, tasks: 5 };

export default issues;
