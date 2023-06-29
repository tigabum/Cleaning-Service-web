import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
return(
    <div>
        <p>Welcome to Possible, a cleaning service provider. <br/>
            We are best in this service for long time.
        </p>
        <a href='#'>Support</a> { " "}
        <a href='#'>Contact Us</a>{" "}
        <a href='#'><LanguageIcon/>: Eng</a>{" "}
        <a href='#'><FacebookIcon/></a>{" "}
        <a href='#'><TwitterIcon/></a>{" "}
        <a href='#'><LinkedInIcon/> </a>{" "}
        <a href='#'><InstagramIcon/> </a>{" "}
    </div>
)
}

export default Header