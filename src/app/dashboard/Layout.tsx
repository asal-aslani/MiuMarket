import { DrawerHeader } from "@/components/dashboard-layout/DrawerHeader";
import { Box } from "@mui/material";

export default function DashboardLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Box sx={{ display: "flex" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
