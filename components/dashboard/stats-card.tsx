"use client";

import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  trend?: {
    value: string;
    isPositive?: boolean;
  };
  status?: {
    label: string;
    variant: "warning" | "success" | "destructive";
  };
  iconClassName?: string;
}

export function StatsCard({
  icon: Icon,
  label,
  value,
  trend,
  status,
  iconClassName,
}: StatsCardProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-2">
        <div className={`rounded-full p-2 ${iconClassName}`}>
          <Icon className="h-4 w-4" />
        </div>
        <div className="space-y-0.5">
          <p className="text-sm font-medium text-muted-foreground">{label}</p>
          <p className="text-xl font-bold">{value}</p>
        </div>
        {trend && (
          <div className={`ml-auto flex items-center gap-1 ${trend.isPositive ? "text-green-600" : "text-red-600"}`}>
            {trend.value}
          </div>
        )}
        {status && (
          <div className="ml-auto">
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium 
              ${status.variant === "warning" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" : ""}
              ${status.variant === "destructive" ? "text-destructive" : ""}
              ${status.variant === "success" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" : ""}`
            }>
              {status.label}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
}