import { Box } from "@mui/material";
import StudentPortal from "../Components/StudentPortal";
import female from '../Images/female.jpg';

const StudentMenu = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${female})`,
        width: '100%',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <StudentPortal />
    </Box>
  );
};

export default StudentMenu;
