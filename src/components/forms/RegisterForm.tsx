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
  const [state, action] = useActionState(register, undefined);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  return (
    <form action={action}>
      {/* لوگو */}
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Image
          src="/mui.jpg"
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: "contain", borderRadius: "50%" }}
        />
      </Box>

      {/* عنوان و لینک ورود */}
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Typography variant="h5">ثبت نام</Typography>
        <MuiLink href="/auth/login">آیا قبلاً ثبت‌نام کرده‌اید؟</MuiLink>
      </Stack>

      <Stack gap={3}>
        {/* نام و نام خانوادگی */}
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
            helperText={state?.errors?.firstName?.[0] || ""}
            fullWidth
            name="firstName"
            id="first-name"
            label="نام"
            variant="outlined"
          />
          <TextField
            error={!!state?.errors?.lastName}
            helperText={state?.errors?.lastName?.[0] || ""}
            fullWidth
            name="lastName"
            id="last-name"
            label="نام خانوادگی"
            variant="outlined"
          />
        </Stack>

        {/* ایمیل */}
        <TextField
          error={!!state?.errors?.email}
          helperText={state?.errors?.email?.[0] || ""}
          fullWidth
          name="email"
          type="email"
          id="email"
          label="ایمیل"
          variant="outlined"
        />

        {/* رمز عبور */}
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

        {/* تایید رمز عبور */}
        <FormControl variant="outlined">
  <InputLabel error={!!state?.errors?.confirmPassword} size="small">
    تأیید رمز عبور
  </InputLabel>
  <OutlinedInput
    error={!!state?.errors?.confirmPassword}
    name="confirmPassword"
    size="small"
    type={showConfirmPassword ? "text" : "password"}
    endAdornment={
      <InputAdornment position="end">
        <IconButton onClick={handleClickShowConfirmPassword}>
          {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    }
    label="تأیید رمز عبور"
  />
  <FormHelperText error>
    {(state?.errors?.confirmPassword || []).map((e: string) => (
      <Box component="span" display="block" key={e}>
        {e}
      </Box>
    ))}
  </FormHelperText>
</FormControl>

        {/* دکمه ثبت‌نام */}
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

        {/* شرایط و قوانین */}
        <Typography variant="caption" sx={{ textAlign: "center", marginTop: 2 }}>
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