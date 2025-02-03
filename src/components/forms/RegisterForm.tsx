"use client";
import { register } from "@/actions/register";
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
import Image from "next/image";
import React, { useActionState, useState } from "react";

function RegisterForm() {
  const [state, action] = useActionState(register);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <form action={action}>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Image
          src="/mui.jpg"
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: "contain", borderRadius: "50%" }}
        />
      </Box>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5">ثبت نام</Typography>
        <MuiLink href="/auth/login">آیا قبلا ثبت نام کرده‌اید؟</MuiLink>
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
          <TextField
            error={!!state?.errors?.firstName} 
            helperText={state?.errors?.firstName || ""} // مقدار پیش‌فرض خالی برای جلوگیری از undefined
            fullWidth
            name="firstName"
            id="first-name"
            label="نام"
            variant="outlined"
          />
          <TextField
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName || ""}
            fullWidth
            name="lastName"
            id="last-name"
            label="نام خانوادگی"
            variant="outlined"
          />
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
            {(state?.errors?.password || []).map((e: string) => (
              <Box component="span" display="block" key={e}>
                {e}
              </Box>
            ))}
          </FormHelperText>
        </FormControl>

        <FormHelperText error>
          {(state?.errors?.confirmPassword || []).map((e: string) => (
            <Box component="span" display="block" key={e}>
              {e}
            </Box>
          ))}
        </FormHelperText>

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
            ثبت نام
          </Button>
        </Box>
        <Typography
          variant="caption"
          sx={{ textAlign: "center", marginTop: 2 }}
        >
          ورود شما به معنای پذیرش{" "}
          <MuiLink href="/terms" target="_blank" sx={{ mx: 0.5 }}>
            شرایط میومارکت
          </MuiLink>{" "}
          و{" "}
          <MuiLink href="/privacy-policy" target="_blank" sx={{ mx: 0.5 }}>
            قوانین حریم خصوصی
          </MuiLink>{" "}
          است.
        </Typography>
      </Stack>
    </form>
  );
}

export default RegisterForm;
