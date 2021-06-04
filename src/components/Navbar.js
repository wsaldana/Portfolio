import React, { Component } from 'react'
import '../styles/navbar.scss'
// Icon Buttons
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import ComputerIcon from '@material-ui/icons/Computer';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/Email';

const scrollWindow = (index) => { 
    const scroller = document.getElementById("mainContainer")
    //scroller.scrollTo(0, window.innerHeight * index)
    scroller.scroll({
        top: window.innerHeight * index,
        left: 0,
        behavior: 'smooth'
    });
}

export default class Navbar extends Component {
    render() {
        return (
            <div className="container" id="navbarContainer">
                <ul>
                    <li>
                        <IconButton color="primary" aria-label="home" onClick={()=>scrollWindow(0)} >
                            <HomeIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="primary" aria-label="about" onClick={()=>scrollWindow(1)}>
                            <PersonIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="primary" aria-label="web" onClick={()=>scrollWindow(2)}>
                            <ComputerIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="primary" aria-label="app" onClick={()=>scrollWindow(3)}>
                            <PhoneIphoneIcon />
                        </IconButton>
                    </li>
                    <li>
                        <IconButton color="primary" aria-label="contact" onClick={()=>scrollWindow(4)}>
                            <EmailIcon />
                        </IconButton>
                    </li>
                </ul>
            </div>
        )
    }
}
