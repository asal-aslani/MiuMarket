
import LoginForm from "@/components/forms/LoginForm";
import { Card, CardContent } from "@mui/material";

function login () {
  return (
    <Card sx={{ width: 500, padding: 2 }}>
      <CardContent>
<LoginForm/>
      </CardContent>
    </Card>
  );
};


export default login 

