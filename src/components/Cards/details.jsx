import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

function Details(props) {
    const { open, close, id, name, imageSrc } = props;
    return (
        <>
        <Container       
            sx={{
                display: "xl",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
          }}>
            <Dialog open={open} onClose={close}>
                <DialogTitle style={{ alignItems: 'center', justifyContent: 'center'}}>{name}</DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={close}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers sx={{ display: 'flex' }}>
                    <img src={imageSrc} alt={name} style={{ maxWidth: '400%', maxHeight: '400px', marginBottom: '20px' }} />
                    
                </DialogContent>
                
            </Dialog>
            
        </Container>
        </>
    );

}

export default Details; 