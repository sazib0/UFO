"use client";

import { Receipt } from "lucide-react";
import { StatsCard } from "../stats-card";

export function TaxCard() {
  return (
    <StatsCard
      icon={Receipt}
      label="Tax Due"
      value="$15,600"
      status={{ label: "Due Soon", variant: "destructive" }}
      iconClassName="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400"
    />
  );
}