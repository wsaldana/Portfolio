import React, { useRef } from 'react'
import Card from './Card'
import '../styles/web.scss';
import '../styles/sectionComponent.scss';

import javaCard from '../public/img/javaCard.png'
import pythonCard from '../public/img/pythonCard.png'
import unityCard from '../public/img/unityCard.png'
import ss1 from '../public/img/ss1.jpg'
import ss2 from '../public/img/ss2.jpg'
import ss3 from '../public/img/ss3.png'

export default function Web() {

    const scrollableRowRef = useRef(null);

    const apps = [
        {
            frontImg: javaCard,
            backImg: ss1,
            title: 'List Interpreter',
            language: 'Java',
            technologies: 'Java, LISP',
            description: 'Functional LISP interpreter written in Java. Able to run common lisp commands and execute scripts.',
            link: 'https://github.com/wsaldana/LispInterpreter'
        },
        {
            frontImg: pythonCard,
            backImg: ss2,
            title: 'PostMP3',
            language: 'Python',
            technologies: 'Python, PostgreSQL, MongoDB, NodeJS, Express',
            description: 'Music desktop applicatio. Reproduces music and algo generate analytic reposts for administrator users.',
            link: 'https://github.com/wsaldana/PostMP3'
        },
        {
            frontImg: unityCard,
            backImg: ss3,
            title: 'Spectrometer',
            language: 'C#',
            technologies: 'Unity 3D, C#',
            description: "Mass spectrometer simulator. Shows how charged particles get affected by an electric field and how can it be used to calculate it's mass",
            link: 'https://github.com/wsaldana/Spectrometer'
        }
    ]

    return (
        <div>
        <div className="container" id="container1">
            <h2>TOP PROJECTS</h2>
            <h3>Still not convinced? then let me play my cards.</h3>
            <p>Pick a card.</p>
        </div>
        <div className="container-fluid" id="container2">
            <div className="container cardGroup justify-content-center">
                <div className='row' id='scrollableRow' ref={scrollableRowRef} >
                    {
                        apps.map((app) => {
                            return (
                                <div className='col'>
                                    <Card {...app} />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
        </div>
    )
}
