import { Box, Typography, Button } from "@mui/material";
import SchoolCard from "../Components/SchoolCard";
import { useEffect, useState } from "react";

const Schools = () => {
  const [school, setSchool] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/Schools.json');
      if (!res.ok) {
        console.log('Error fetching data:');
        return;
      }
      const data = await res.json();
      setSchool(data);
    };

    fetchData();
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = school.slice(indexOfFirstItem, indexOfLastItem);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ width: '100%', mt: 10 }}>
        <Box sx={{ mt: 4, mb: 4, width: '100%', bgcolor: '#212223', p: 3, color: 'white', height: 100, display: 'flex', flexDirection: 'column', alignmentBaseline: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom mb={0}>
            Find your school here
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontSize: { xs: 20 } }}>
            Learn more about your school
          </Typography>
        </Box>

        <Box sx={{ width: '100%', display: 'flex', gap: 2, flexWrap: 'wrap', px: { md: '2%', xs: 0 }, justifyContent: { xs: 'center' } }}>
          {currentItems.map((data) => (
            <Box key={data.id}>
              <SchoolCard imageName={data.badge} schoolInfo={`${data.about} ${data.achievements}`} schoolType={data.type} schoolName={data.name} />
            </Box>
          ))}
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" onClick={handlePrevPage} disabled={currentPage === 1} sx={{bgcolor:'black',color:'white'}}>
            Previous
          </Button>
          <Button variant="contained" onClick={handleNextPage} disabled={indexOfLastItem >= school.length} sx={{bgcolor:'black',color:'white'}}>
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Schools;
