
import RegisterForm from "@/components/forms/RegisterForm";
import { Card, CardContent } from "@mui/material";

function Register(){
  return (
    <Card sx={{ width: 500, padding: 2 }}>
      <CardContent>
<RegisterForm/>
      </CardContent>
    </Card>
  );
};

export default Register;
