import { colors, createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

const theme = createTheme({
    direction: 'rtl',
    typography:{
      fontFamily:"Vazirmatn",
    },
    palette: {
        background:{
          default:colors.grey[100]
        },
        primary: {
          main: red["A700"],
          light: '#e57373',
          dark: '#d32f2f',
          contrastText: '#fff',
        },
        secondary: {
          main:red[50],
        },
      },
    
  });

  export default theme