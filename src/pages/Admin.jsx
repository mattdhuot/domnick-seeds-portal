import React from "react";

export default function Admin() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        Admin Portal
      </h1>
      <p className="text-sm text-slate-600">
        This is your internal Domnick Seeds admin area. From here we can build:
      </p>
      <ul className="list-disc list-inside text-sm text-slate-700 space-y-1">
        <li>Invoice manager (add/edit invoices for each customer)</li>
        <li>Seed &amp; services orders (DEKALB, Albert Lea, BW Fusion, Pivot Bio)</li>
        <li>Soil sampling jobs with links to Agronomy 365</li>
        <li>Drone scouting reports (stand counts, crop health, fungicide checks)</li>
        <li>Document uploads (statements, booking summaries, PDFs)</li>
        <li>Customer account management and permissions</li>
      </ul>
      <p className="text-sm text-slate-600">
        Right now this page is a placeholder. The next steps are to create
        database tables in Supabase (customers, invoices, orders, soil_samples,
        drone_reports, documents) and then wire simple forms here so you can
        manage everything without leaving this portal.
      </p>
    </div>
  );
}
