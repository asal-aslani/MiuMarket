import { createTheme } from "@mui/material";

const theme = createTheme({
    direction: 'rtl',
    typography:{
      fontFamily:"Vazirmatn",
    },
    palette: {
      primary: {
        main: '#D50000',  // قرمز جیغ‌تر و پررنگ‌تر
      },
      secondary: {
        main: '#004D40',  // رنگ مکمل (سبز تیره) 
      },
      success: {
        main: '#388E3C',  // سبز برای موفقیت
      },
      error: {
        main: '#D32F2F',  // قرمز روشن‌تر برای ارور
      },
      background: {
        default: '#F5F5F5',  // پس‌زمینه خاکستری روشن
        paper: '#FFFFFF',    // رنگ پس‌زمینه کارت‌ها
      },
      text: {
        primary: '#212121',  // رنگ متن اصلی
        secondary: '#757575', // رنگ متن ثانویه
      },
    },
  });
  


  export default theme