import {
  PlayCircle,
  Bug,
  ShieldAlert,
  Gauge,
} from "lucide-react";

import MainLayout from "../components/layout/MainLayout";
import StatCard from "../components/dashboard/StatCard";
import SimulationChart from "../components/dashboard/SimulationChart";
import RecentSimulations from "../components/dashboard/RecentSimulations";
import IssueChart from "../components/dashboard/IssueChart";

function Dashboard() {
  return (
    <MainLayout>
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
            Overview
          </p>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Monitor your simulated user testing activity and findings.
          </p>
        </div>

        <div className="hidden text-right sm:block">
          <p className="text-xs text-slate-400">
            Last updated
          </p>

          <p className="mt-1 text-xs font-medium text-slate-600">
            Just now
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total simulations"
          value="128"
          description="vs. last month"
          trend="+18.4%"
          trendType="up"
          icon={PlayCircle}
        />

        <StatCard
          title="Issues detected"
          value="342"
          description="vs. last month"
          trend="+12.8%"
          trendType="up"
          icon={Bug}
        />

        <StatCard
          title="Critical issues"
          value="24"
          description="vs. last month"
          trend="-8.2%"
          trendType="down"
          icon={ShieldAlert}
        />

        <StatCard
          title="Average UX score"
          value="84.6%"
          description="vs. last month"
          trend="+5.4%"
          trendType="up"
          icon={Gauge}
        />
      </div>

      <div className="mt-6">
        <SimulationChart />
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <IssueChart />
        <div className="surface p-5"><div className="flex items-start justify-between"><div><h3 className="text-sm font-bold text-slate-900">Simulation activity</h3><p className="mt-1 text-xs text-slate-400">Runs completed this month</p></div><span className="rounded-md bg-emerald-50 px-2 py-1 text-[11px] font-bold text-emerald-700">+18.4%</span></div><div className="mt-8 flex h-32 items-end gap-3">{[45, 62, 48, 72, 58, 86, 67, 94, 76, 100, 82, 96].map((height, index) => <div key={index} className="flex flex-1 flex-col justify-end gap-2"><div className="rounded-t bg-indigo-500/80" style={{ height: `${height}%` }} /><span className="text-center text-[9px] text-slate-400">{index + 1}</span></div>)}</div></div>
      </div>

      <div className="mt-6">
        <RecentSimulations />
      </div>
    </MainLayout>
  );
}

export default Dashboard;