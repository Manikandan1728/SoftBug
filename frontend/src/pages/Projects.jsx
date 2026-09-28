import { useState } from "react";
import MainLayout from "../components/layout/MainLayout";
import ProjectHeader from "../components/projects/ProjectHeader";
import ProjectGrid from "../components/projects/ProjectGrid";
import projects from "../data/mockProjects";
function Projects() { const [search, setSearch] = useState(""); const filtered = projects.filter((project) => project.name.toLowerCase().includes(search.toLowerCase())); return <MainLayout><ProjectHeader search={search} setSearch={setSearch} /><ProjectGrid projects={filtered} /></MainLayout>; }
export default Projects;