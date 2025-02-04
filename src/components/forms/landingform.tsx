"use client";
import { Typography, Box } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Landingpage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/auth/register");
    }, 5000);

    return () => clearTimeout(timer); 
  }, [router]);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDirection="column"
      textAlign="center"
    >
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{
          display: { xs: "none", sm: "block" },
          color: "red",
          fontSize: "1.8rem",
          fontWeight: "bold",
        }}
      >
        MiuMarket
      </Typography>

      <Typography variant="h5" sx={{ marginTop: 2 }}>
        به میومارکت دنیای تنوع خوش آمدید ❤️
      </Typography>
    </Box>
  );
}