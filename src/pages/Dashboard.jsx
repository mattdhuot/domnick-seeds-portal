import React from "react";

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-slate-900">
        Dashboard
      </h1>
      <p className="text-sm text-slate-600">
        This is your customer-facing dashboard. We can wire this up to show
        invoices, orders, soil sampling, and drone report summaries pulled
        directly from Supabase.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl border bg-white p-4 text-sm">
          <div className="text-xs text-slate-500 uppercase mb-1">
            Outstanding balance
          </div>
          <div className="text-xl font-semibold text-slate-900">
            $0.00
          </div>
          <div className="text-[11px] text-slate-500 mt-1">
            Once invoices are set up, this will show the customer&apos;s live balance.
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4 text-sm">
          <div className="text-xs text-slate-500 uppercase mb-1">
            Seed & services
          </div>
          <div className="text-[13px] text-slate-700">
            A summary of booked seed, BW Fusion programs, Pivot Bio, and chemical.
          </div>
        </div>
        <div className="rounded-xl border bg-white p-4 text-sm">
          <div className="text-xs text-slate-500 uppercase mb-1">
            Agronomy snapshot
          </div>
          <div className="text-[13px] text-slate-700">
            Insight Soil Sampling and drone reports can be summarized here.
          </div>
        </div>
      </div>
    </div>
  );
}
