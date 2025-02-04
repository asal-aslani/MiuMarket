import DashboardHeader from "@/components/dashboard-layout/header";

export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <div>
      <DashboardHeader/>
      {children}
      </div>
  )
}
