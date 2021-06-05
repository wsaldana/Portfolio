import React from 'react';
import '../styles/home.scss';
import '../styles/sectionComponent.scss';

export default function Home() {

    return (
        <div className="container d-flex flex-column justify-content-center" id="titleContainer">
            <div className='row align-items-end animate__animated animate__fadeInLeft'>
                <div className='col' id='hi'><h4>Hi! I'm</h4></div>
                <div className='col-md'>
                    <div className='row'>
                        <div className='col-12'><h1>WALTER</h1></div>
                        <div className='col-12'><h1>SALDANA</h1></div>
                    </div>
                </div>
                <div className='col-12'><h3>WELCOME TO MY PORTFOLIO</h3></div>
            </div>
        </div>
    )
}
