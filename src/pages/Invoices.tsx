import { DashboardLayout } from "@/components/DashboardLayout";
import { InvoiceTable } from "@/components/InvoiceTable";

const Invoices = () => (
  <DashboardLayout>
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Invoice Verification</h2>
        <p className="text-sm text-muted-foreground mt-1 font-mono">Automated duplicate & anomaly detection</p>
      </div>
      <InvoiceTable />
    </div>
  </DashboardLayout>
);

export default Invoices;
