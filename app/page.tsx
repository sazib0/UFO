import { AccountingCard } from "@/components/dashboard/module-cards/accounting-card";
import { FPACard } from "@/components/dashboard/module-cards/fpa-card";
import { PayrollCard } from "@/components/dashboard/module-cards/payroll-card";
import { TaxCard } from "@/components/dashboard/module-cards/tax-card";

export default function Home() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <AccountingCard />
        <FPACard />
        <PayrollCard />
        <TaxCard />
      </div>
    </div>
  );
}