import { Image } from "@mui/icons-material";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SchoolSlug = () => {
  const { id } = useParams();
  const [school, setSchool] = useState(null); // Use null to represent no data initially
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/Schools.json');
        if (!res.ok) {
          console.log('Error fetching data');
          setIsLoading(false);
          return;
        }
        const data = await res.json(); // Await the JSON parsing
        const schoolDetails = data.find((school) => school.id === parseInt(id));
        setSchool(schoolDetails);
      } catch (error) {
        console.log('Error:', error);
      } finally {
        setIsLoading(false); // Ensure loading state is set to false after fetching
      }
    };

    fetchData();
  }, [id]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (!school) {
    return <Typography>No school found with the given ID.</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: { md: 'row', xs: 'column-reverse' }, width: '100%', px: '10%' }}>
      <Box>
        <img src={school.Image} alt={`${school.name} badge`} />
      </Box>
      <Box>
        <Typography variant="h4">{school.name}</Typography>
        <Typography variant="body1">{school.about}</Typography>
        <Typography variant="body2">{school.achievements}</Typography>
        <Typography variant="body2">{school.type}</Typography>
      </Box>
    </Box>
  );
};

export default SchoolSlug;
