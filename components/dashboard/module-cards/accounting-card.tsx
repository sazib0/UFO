"use client";

import { Calculator } from "lucide-react";
import { StatsCard } from "../stats-card";

export function AccountingCard() {
  return (
    <StatsCard
      icon={Calculator}
      label="Accounts Receivable"
      value="$45,800"
      trend={{ value: "+8%", isPositive: true }}
      iconClassName="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
    />
  );
}