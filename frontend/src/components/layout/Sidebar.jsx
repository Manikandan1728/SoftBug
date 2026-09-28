import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  FolderKanban,
  PlayCircle,
  Users,
  ChartNoAxesCombined,
  Settings,
  HelpCircle,
} from "lucide-react";

const navigation = [
  {
    section: "WORKSPACE",
    items: [
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "Projects",
        path: "/projects",
        icon: FolderKanban,
      },
      {
        label: "Simulations",
        path: "/simulations",
        icon: PlayCircle,
      },
      {
        label: "Personas",
        path: "/personas",
        icon: Users,
      },
      {
        label: "Reports",
        path: "/results",
        icon: ChartNoAxesCombined,
      },
    ],
  },
];

function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 z-40 flex h-screen w-[250px] flex-col border-r border-slate-200 bg-white">
      {/* Brand */}
      <div className="flex h-[72px] items-center border-b border-slate-200 px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600">
            <span className="text-sm font-bold text-white">
              UX
            </span>
          </div>

          <div>
            <h1 className="text-[17px] font-bold tracking-tight text-slate-900">
              UXSim
            </h1>

            <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
              Intelligent Testing
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-3 py-6">
        {navigation.map((group) => (
          <div key={group.section}>
            <p className="mb-3 px-3 text-[10px] font-semibold tracking-widest text-slate-400">
              {group.section}
            </p>

            <nav className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-indigo-50 text-indigo-700"
                          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={18}
                          strokeWidth={isActive ? 2.2 : 1.8}
                          className={
                            isActive
                              ? "text-indigo-600"
                              : "text-slate-400 group-hover:text-slate-600"
                          }
                        />

                        <span>{item.label}</span>

                        {item.label === "Simulations" && (
                          <span className="ml-auto rounded-md bg-slate-100 px-1.5 py-0.5 text-[10px] font-semibold text-slate-500">
                            12
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        ))}

        {/* System */}
        <div className="mt-8 border-t border-slate-100 pt-5">
          <p className="mb-3 px-3 text-[10px] font-semibold tracking-widest text-slate-400">
            SYSTEM
          </p>

          <nav className="space-y-1">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-indigo-50 text-indigo-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`
              }
            >
              <Settings
                size={18}
                strokeWidth={1.8}
                className="text-slate-400"
              />

              Settings
            </NavLink>

            <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
              <HelpCircle
                size={18}
                strokeWidth={1.8}
                className="text-slate-400"
              />

              Help & Support
            </button>
          </nav>
        </div>
      </div>

      {/* User */}
      <div className="border-t border-slate-200 p-3">
        <div className="flex items-center gap-3 rounded-lg p-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            AD
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-slate-800">
              Project Admin
            </p>

            <p className="truncate text-xs text-slate-400">
              Administrator
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;