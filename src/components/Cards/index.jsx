import { Container } from "@mui/material";
import React, { useState, useEffect } from "react"; 
import { DataGrid } from '@mui/x-data-grid';
import Details from "./details.jsx";

function Card() {

    const [data, setData] = useState([]);
    const [openDetails, setOpenDetails] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

    const columns = [
        { field: 'id', headerName: 'ID', headerAlign: 'center', width: 100 },
        { field: 'name', headerName: 'Card Name', headerAlign: 'center', width: 150 },
        { field: 'image', headerName: 'Image', headerAlign: 'center', width: 300, renderCell: (params) => <img src={params.row.images.small} alt={params.row.name} style={{ marginTop: '20px',marginLeft: '20px' }} onClick={() => imageClick(params.row.id, params.row.name, params.row.images.large)}/>}
    ];

    useEffect(() => {
        handlePostCall();
    }, []);

    const handlePostCall = async() => {
        try{
            const response = await fetch('http://localhost:80/GetCardPage/2/20', {
                method: 'GET',
            });
            
            if(response){
                const responseData = await response.json();
                console.log(responseData);
                setData(responseData);
            }

        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const imageClick = (id, name,imageSrc) => {
        setSelectedRow({ id, name, imageSrc });
        setOpenDetails(true);
    };

    const closeDetails = () => {
        setOpenDetails(false);
    };

  return (
    <Container
      sx={{
        display: "xl",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <DataGrid rows={data} columns={columns} autoHeight rowHeight={400} />
      <Details 
        open={openDetails} 
        close={closeDetails}
        id={selectedRow?.id}
        name={selectedRow?.name}
        imageSrc={selectedRow?.imageSrc} />
    </Container>
  );
}

export default function CardPage() {
  return (
    <>
      <Card />
    </>
  );
}
