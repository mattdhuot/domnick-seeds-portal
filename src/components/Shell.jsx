import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const navItems = [
  { to: "/", label: "Dashboard" },
  { to: "/admin", label: "Admin Portal" },
  { to: "/billing", label: "Billing" },
  { to: "/orders", label: "Seed & Services" },
  { to: "/agronomy", label: "Soil & Drone" },
  { to: "/documents", label: "Documents" },
  { to: "/account", label: "Account" }
];

export default function Shell() {
  return (
    <div className="min-h-screen flex bg-slate-100">
      <aside className="w-64 bg-white border-r flex flex-col">
        <Link to="/" className="flex items-center gap-2 px-4 py-4 border-b">
          <img
            src="/logo.png"
            alt="Domnick Seeds Logo"
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900">
              Domnick Seeds
            </span>
            <span className="text-[11px] text-slate-500">
              Customer Portal
            </span>
          </div>
        </Link>

        <nav className="flex-1 px-2 py-3 space-y-1 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 ${
                  isActive
                    ? "bg-dsGreen text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`
              }
              end={item.to === "/"}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-3 border-t text-[11px] text-slate-500">
          Need help?{" "}
          <a href="/contact" className="text-dsGreen font-medium">
            Contact Domnick Seeds
          </a>
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b bg-white flex items-center justify-between px-6 text-sm">
          <div className="font-medium text-slate-800">
            Domnick Seeds Customer Portal
          </div>
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span>Logged in user</span>
            <a
              href="/login"
              className="px-3 py-1 rounded-md border text-slate-700 hover:bg-slate-50"
            >
              Log out
            </a>
          </div>
        </header>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
