import React from 'react'
import '../styles/contact.scss';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';
import { makeStyles } from '@material-ui/core/styles';
import Swal from 'sweetalert2';

const useStyles = makeStyles((theme) => ({
    btnSend: {
        marginTop: 20,
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export default function Contact() {

    const classes = useStyles();


    return (
        <div className="container">
            <h2>CONTACT</h2>
            <h3>Now you play your cards.</h3>
            <p>Best move? Hire me.</p>
            <br/>

            <div class="form">
                <form action={()=>console.log('Enviado')} className="row row-cols-1">
                    <div class="col"> 
                        <label className="sr-only" for="name">Name</label> 
                        <input className="form-control" type="text" placeholder="Jhon Doe" name="name" id="name" /> 
                    </div>
                    <div class="col"> 
                        <label className="sr-only" for="email">Email</label> 
                        <input className="form-control" type="email" placeholder="jhon@doe.com" name="email" id="email" /> 
                    </div>
                    <div class="col"> 
                        <label className="sr-only" for="company">Company</label> 
                        <input className="form-control" type="text" placeholder="Monsters INC" name="company" id="company" /> 
                    </div>
                    <br/>
                    <div class="col"> 
                        <label className="sr-only" for="message">Message</label> 
                        <textarea className="form-control" placeholder="I have an idea for a project...." name="message" id="message" /> 
                    </div> 
                    <br/>
                    <div class="col"> 
                        <Button variant="contained" color="primary" className={classes.btnSend} onClick={()=>{
                            Swal.fire({
                                icon: 'success',
                                title: 'Thank you!',
                                text: "I'll be getting back to you as soon as posible.",
                                width: '50%',
                                padding: '3em',
                                backdrop: `
                                  rgba(0,0,123,0.4)
                                  url("http://www.clipartbest.com/cliparts/eTM/7Eo/eTM7Eo7oc.gif")
                                  left top
                                  no-repeat
                                `
                            })}
                        }>
                            SEND 
                        </Button>
                    </div> 
                </form>
            </div>

            <div className="container contact">
                <div className="row">
                    <div className="col">
                            <Button
                                color="primary"
                                className={classes.button}
                                startIcon={<GitHubIcon />}
                                href="https://github.com/wsaldana" 
                                target="_blank"
                            > wsaldana</Button>
                    </div>
                    <div className="col">
                            <Button
                                color="primary"
                                className={classes.button}
                                startIcon={<MailIcon />}
                            > fakemail@uvg.edu.gt</Button>
                    </div>
                    <div className="col">
                            <Button
                                color="primary"
                                className={classes.button}
                                startIcon={<PhoneIcon />}
                            > +111 1234-5678</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
