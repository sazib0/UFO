"use client";

import { BarChart3 } from "lucide-react";
import { StatsCard } from "../stats-card";

export function FPACard() {
  return (
    <StatsCard
      icon={BarChart3}
      label="Budget Variance"
      value="+2.4%"
      status={{ label: "On Track", variant: "success" }}
      iconClassName="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400"
    />
  );
}