"use client";

import { Users } from "lucide-react";
import { StatsCard } from "../stats-card";

export function PayrollCard() {
  return (
    <StatsCard
      icon={Users}
      label="Payroll"
      value="$42,800"
      status={{ label: "Processing", variant: "warning" }}
      iconClassName="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    />
  );
}