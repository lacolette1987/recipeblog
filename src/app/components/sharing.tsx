import React from 'react';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Box, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { IconStyle } from '../theme/my-theme';
import { visuallyHidden } from '@mui/utils';

interface SharingProps {
  title: string;
}

const Sharing:React.FC<SharingProps> = ({title}) => {



  const emailSubject = `Rezept ${title}`;
  const emailBody = `Ich habe dieses Rezept entdeckt und dachte, es könnte dich interessieren: \n\n${title}:\n${window.location.href}`;
  const emailLink = `mailto:?subject=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  const message = 'Ich habe dieses Rezept entdeckt und dachte, es könnte dich interessieren: ' + window.location.href;
  const phoneNumber = '';
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <Typography sx={{margin: '40px 0px 12px 0px', fontWeight: 'bold'}} variant='body1'>Rezept teilen:</Typography>
      <Grid container>
        <Grid item marginRight={'10px'}>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              window.location.href
            )}`}
            target="_blank" rel="noreferrer"
          >
            <FacebookSharpIcon style={IconStyle} sx={{ fontSize: 30 }} aria-label="Auf Facebook teilen" />
            <Box sx={visuallyHidden}>Auf Facebook teilen</Box>
          </a>
        </Grid>
        <Grid item marginRight={'10px'}>
          <Link to={whatsappLink}>
            <WhatsAppIcon style={IconStyle} sx={{ fontSize: 30 }} aria-label="Auf Whatsapp teilen" />
            <Box sx={visuallyHidden}>Auf Whatsapp teilen</Box>
          </Link>
        </Grid>
        <Grid item>
          <Link to={emailLink}>
            <AlternateEmailIcon style={IconStyle} sx={{ fontSize: 30 }} aria-label="Per E-Mail teilen" />
            <Box sx={visuallyHidden}>Per E-Mail teilen</Box>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default Sharing;
