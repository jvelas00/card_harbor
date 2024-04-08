import { Box, Card, Container } from "@mui/material";
import React, { useRef, useEffect, useState} from "react";
import Webcam from "react-webcam";
import CardPage from "../Cards";

function Camera() {
    const webcamRef = useRef(null);
    const [results, setResults] = useState();
    const [cardList, setCardList] = useState([]);
    const [cardDetailList, setCardDetailList] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            sendFrame();
        }, 10000);

        return () => clearInterval(interval);
        
    }, []);

    const sendFrame = async () => {
        const imageSrc = webcamRef.current.getScreenshot({width: 960, height: 640});
        try{
            const response = await fetch('http://localhost:80/PredictFrame', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'image/jpeg',
                },
                body: JSON.stringify(imageSrc),
            });

            if(response.ok) {
                const data = response.json();
                //add it to the card list if it doesn't exist
                //add it to card detail list [name, details] call external api or database for details
                // 
                console.log(data);
            }
            console.log("something bad probably happened");

        } catch (error) {
            console.log("something happened when sending a frame");
        }
    };


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', overflowY: 'none'}}>
      <Container>
        <Box>
          placeholder
          <Webcam 
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
        </Box>
      </Container>
      <Container sx={{ display: 'flex', position: 'fixed', top: 130, right: 0, height: '100vh', width: '34%', overflowY: 'auto'}}>
        <CardPage />
      </Container>
    </Box>
  );
}

export default function CameraPage() {
  return <Camera />;
}