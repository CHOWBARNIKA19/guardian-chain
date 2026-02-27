import { DashboardLayout } from "@/components/DashboardLayout";
import { SupplierTable } from "@/components/SupplierTable";

const Suppliers = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Suppliers</h2>
        <p className="text-sm text-muted-foreground mt-1 font-mono">Complete supplier risk registry</p>
      </div>
      <SupplierTable />
    </div>
  </DashboardLayout>
);

export default Suppliers;
