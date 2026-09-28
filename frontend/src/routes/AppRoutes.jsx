import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails";
import CreateSimulation from "../pages/CreateSimulation";
import Simulations from "../pages/Simulations";
import SimulationDetails from "../pages/SimulationDetails";
import LiveSimulation from "../pages/LiveSimulation";
import Personas from "../pages/Personas";
import PersonaDetails from "../pages/PersonaDetails";
import Results from "../pages/Results";
import Report from "../pages/Report";
import Settings from "../pages/Settings";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />

      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/projects" element={<Projects />} />

      <Route
        path="/projects/:projectId"
        element={<ProjectDetails />}
      />

      <Route
        path="/simulations/create"
        element={<CreateSimulation />}
      />

      <Route path="/simulations" element={<Simulations />} />

      <Route
        path="/simulations/:simulationId"
        element={<SimulationDetails />}
      />

      <Route
        path="/simulations/:simulationId/live"
        element={<LiveSimulation />}
      />

      <Route path="/personas" element={<Personas />} />

      <Route
        path="/personas/:personaId"
        element={<PersonaDetails />}
      />

      <Route path="/results" element={<Results />} />

      <Route path="/reports" element={<Results />} />

      <Route path="/reports/:reportId" element={<Report />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;