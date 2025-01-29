'use client';

import React, { useState } from "react";
import { useActionState } from "react"; 
import {
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Card,
  CardContent,
  Stack,
  Typography,
  Link as MuiLink,
  TextField,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import Image from "next/image";
import { register } from "@/actions/register";

type Props = {};

const Register: React.FC<Props> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [state, action] = useActionState(register);  

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Card sx={{ width: 500, padding: 2 }}>
      <CardContent>
        <form action={action}>
          <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
            <Image src="/mui.jpg" alt="Logo" width={100} height={100} style={{ objectFit: "contain", borderRadius: "50%" }} />
          </Box>

          <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
            <Typography variant="h5">ثبت نام</Typography>
            <MuiLink href="/auth/login">آیا قبلا ثبت نام کرده‌اید؟</MuiLink>
          </Stack>

          <Stack gap={3}>
            <Stack mt={2} gap={2} direction="row" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
              <TextField
                error={!!state?.errors.firstName}
                helperText={state?.errors.firstName}
                fullWidth name="firstName" id="first-name" label="نام" variant="outlined" />
              <TextField
                error={!!state?.errors.lastName}
                helperText={state?.errors.lastName}
                fullWidth name="lastName" id="last-name" label="نام خانوادگی" variant="outlined" />
            </Stack>

            <TextField
              error={!!state?.errors.email}
              helperText={state?.errors.email}
              fullWidth name="email" type="email" id="email" label="ایمیل" variant="outlined" />

            <FormControl fullWidth variant="outlined" error={!!state?.errors.password}>
              <InputLabel htmlFor="outlined-adornment-password">رمز عبور</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="رمز عبور"
              />
              {state?.errors.password && (
                <Typography variant="caption" color="error" sx={{ marginTop: 1 }}>
                  {state?.errors.password}
                </Typography>
              )}
            </FormControl>

            <Typography variant="caption" sx={{ textAlign: "center" }}>
              ورود شما به معنای پذیرش <MuiLink href="/terms" target="_blank">شرایط میومارکت</MuiLink> و <MuiLink href="/privacy-policy" target="_blank">قوانین حریم خصوصی</MuiLink> است.
            </Typography>
          </Stack>

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "darkred" }, paddingX: 4, paddingY: 1 }}
            >
              ثبت نام
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
