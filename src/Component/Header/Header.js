import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";
import Box from "@mui/material/Box";
import HeaderStyles from "./styles";
import Link from '@mui/material/Link';


const Header = () => {
  const classes = HeaderStyles();
  return (
    <Box className={classes.root}>
      <p>
        Welcome to Possible, a cleaning service provider. <br />
        We are best in this service for long time.
      </p>
      <Box className={classes.rightHeader}>
        <Link href="#" underline="none" color="textPrimary" >Support</Link> <Link href="#" underline="none" color="textPrimary" >Contact Us</Link>{" "}
        <Link href="#" underline="none" color="textPrimary" >
          <LanguageIcon />: Eng
        </Link>{" "}
        <Link href="#" color="textPrimary" >
          <FacebookIcon />
        </Link>{" "}
        <Link href="#" color="textPrimary" >
          <TwitterIcon />
        </Link>{" "}
        <Link href="#" color="textPrimary" >
          <LinkedInIcon />{" "}
        </Link>{" "}
        <Link href="#" color="textPrimary" >
          <InstagramIcon />{" "}
        </Link>{" "}
      </Box>
    </Box>
  );
};

export default Header;
