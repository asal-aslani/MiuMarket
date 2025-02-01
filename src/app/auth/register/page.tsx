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
  FormHelperText,
} from "@mui/material";
import Image from "next/image";
import { register } from "@/actions/register";

type Props = {};

const Register: React.FC<Props> = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, action] = useActionState(register);  

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);

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

            <FormControl variant="outlined">
              <InputLabel error={!!state?.errors?.password} size="small">
                رمز عبور
              </InputLabel>
              <OutlinedInput
                error={!!state?.errors?.password}
                name="password"
                size="small"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword ? "hide the password" : "display the password"
                      }
                      onClick={handleClickShowPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
              <FormHelperText error>
                {state?.errors.password?.map((e: string) => (
                  <Box component="span" display="block" key={e}>
                    {e}
                  </Box>
                ))}
              </FormHelperText>
            </FormControl>


          <FormHelperText error>
                {state?.errors?.confirmPassword?.map((e: string) => (
                  <Box component="span" display="block" key={e}>
                    {e}
                  </Box>
                ))}
              </FormHelperText>

            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
              <Button
                type="submit"
                variant="contained"
                sx={{ backgroundColor: "red", "&:hover": { backgroundColor: "darkred" }, paddingX: 4, paddingY: 1 }}
              >
                ثبت نام
              </Button>
            </Box>
          </Stack>
        </form>
      </CardContent>
    </Card>
  );
};

export default Register;
