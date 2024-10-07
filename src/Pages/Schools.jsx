import { Box, Typography, Button,CircularProgress } from "@mui/material";
import SchoolCard from "../Components/SchoolCard";
import { useEffect, useState } from "react";
import { blue } from "@mui/material/colors";

const Schools = () => {
  const [school, setSchool] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true)
  const itemsPerPage = 6; 

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/Schools.json');
      if (!res.ok) {
        console.log('Error fetching data:');
        setLoading(false)
      }
      const data = await res.json();
      setSchool(data);
      setLoading(false)
    };

    fetchData();
  }, []);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = school.slice(indexOfFirstItem, indexOfLastItem);

  const handleScrollToTop = () =>{
    window.scrollTo({top:0, behavior:'instant'})
  }  

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);

    handleScrollToTop()
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
    handleScrollToTop()
  };

  return (
    
      <Box sx={{ width:{md: '97%',xs:'84%'}, mt: 10 }}>
        <Box sx={{ mt: 4, mb: 4, width: '100%', bgcolor: '#212223', p: 3, color: 'white', height: 100, display: 'flex', flexDirection: 'column', alignmentBaseline: 'center', justifyContent: 'center' }}>
          <Typography variant="h4" align="center" gutterBottom mb={0}>
            Find your school here
          </Typography>
          <Typography variant="h6" align="center" sx={{ fontSize: { xs: 18 } }}>
            Learn more about your school
          </Typography>
        </Box>

        {
          loading ? 
          <Box sx={{width:'100%',display:'flex', alignItems:'center', justifyContent:'center', color:blue[300]}}>
            <CircularProgress/> Loading
          </Box>
          :
          <>
          <Box sx={{ ml:4,width: '100%', display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: { xs: 'center' } }}>
          {currentItems.map((data) => (
            <Box key={data.id}>
              <SchoolCard imageName={data.badge} schoolInfo={`${data.about} ${data.achievements}`} schoolType={data.type} schoolName={data.name} />
            </Box>
          ))}
        </Box>

        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 ,display:'flex',gap:3}}>
        <Button variant="contained" onClick={handlePrevPage} disabled={currentPage === 1} sx={{bgcolor:'black',color:'white'}}>
          Previous
        </Button>
        <Button variant="contained" onClick={handleNextPage} disabled={indexOfLastItem >= school.length} sx={{bgcolor:'black',color:'white'}}>
          Next
        </Button>
        </Box>
        </>
        }

   

      </Box>
   
  );
};

export default Schools;
