"use client";
import React, { useActionState, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Link as MuiLink,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  Button,
} from "@mui/material";
import { login } from "@/actions/login";


export default function LoginForm() {
  const [state, action] = useActionState(login, undefined);
const [showPassword, setShowPassword] = useState(false);
const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  return (
    <form action={action}>
 <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
  <Typography
    variant="h6"
    noWrap
    component="div"
    sx={{ 
      display: { xs: 'none', sm: 'block' },
      color: 'red',          
      fontSize: '1.8rem',     
      fontWeight: 'bold'    
    }}
  >
    MiuMarket
  </Typography>
</Box>


      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5">ورود</Typography>
        <MuiLink href="/auth/register">ساخت اکانت</MuiLink>
      </Stack>

      <Stack gap={3}>
        <Stack
          mt={2}
          gap={2}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: 2 }}
        >
      
        </Stack>

        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email || ""}
          fullWidth
          name="email"
          type="email"
          id="email"
          label="ایمیل"
          variant="outlined"
        />

        <FormControl variant="outlined" error={!!state?.errors?.password}>
                 <InputLabel size="small">رمز عبور</InputLabel>
                 <OutlinedInput
                   name="password"
                   size="small"
                   type={showPassword ? "text" : "password"}
                   endAdornment={
                     <InputAdornment position="end">
                       <IconButton
                         aria-label={showPassword ? "عدم نمایش رمز" : "نمایش رمز"}
                         onClick={handleClickShowPassword}
                         edge="end"
                       >
                         {showPassword ? <Visibility /> : <VisibilityOff />}
                       </IconButton>
                     </InputAdornment>
                   }
                   label="رمز عبور"
                 />
                 <FormHelperText>
                   {state?.errors?.password?.[0] || ""}
                 </FormHelperText>
               </FormControl>

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "red",
              "&:hover": { backgroundColor: "darkred" },
              paddingX: 4,
              paddingY: 1,
            }}
          >
            ورود
          </Button>
        </Box>
      </Stack>
    </form>
  );
}

