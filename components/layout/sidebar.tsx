"use client";

import { cn } from "@/lib/utils";
import {
  BarChart3,
  Calculator,
  CreditCard,
  Home,
  LucideIcon,
  PieChart,
  Receipt,
  Settings,
  Users,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SidebarItem {
  icon: LucideIcon;
  label: string;
  href: string;
}

const sidebarItems: { label: string; items: SidebarItem[] }[] = [
  {
    label: "Overview",
    items: [
      {
        icon: Home,
        label: "Dashboard",
        href: "/",
      },
    ],
  },
  {
    label: "Financial Management",
    items: [
      {
        icon: Calculator,
        label: "Accounting & Bookkeeping",
        href: "/accounting",
      },

      {
        icon: Receipt,
        label: "Tax Management",
        href: "/tax",
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        icon: Users,
        label: "Payroll",
        href: "/payroll",
      },
      {
        icon: CreditCard,
        label: "Cheque Management",
        href: "/cheques",
      },
      {
        icon: PieChart,
        label: "Reports",
        href: "/reports",
      },
    ],
  },
  {
    label: "System",
    items: [
      {
        icon: Settings,
        label: "Settings",
        href: "/settings",
      },
    ],
  },
];

export function () {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-card transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      <div className="flex h-14 items-center border-b px-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md hover:bg-accent"
        >
          {collapsed ? (
            <Menu className="h-5 w-5" />
          ) : (
            <X className="h-5 w-5" />
          )}
        </button>
        {!collapsed && (
          <span className="ml-2 text-lg font-semibold">UFO</span>
        )}
      </div>
      <div className="flex-1 overflow-y-auto">
        {sidebarItems.map((section, index) => (
          <div key={index} className="py-4">
            {!collapsed && (
              <div className="mb-2 px-3 text-sm font-medium text-muted-foreground">
                {section.label}
              </div>
            )}
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  href={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 text-sm transition-colors",
                    pathname === item.f
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground",
                    collapsed ? "justify-center" : "justify-start"
                  )}
                >
                  <item.icon className={cn("h-5 w-5", !collapsed && "mr-2")} />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}