import React, { useRef } from 'react'
import Card from './Card'
import '../styles/web.scss';
import '../styles/sectionComponent.scss';

import reactCard from '../public/img/reactCard.png'
import flutterCard from '../public/img/flutterCard.png'
import androidCard from '../public/img/androidCard.png'
import ss1 from '../public/img/ss1.jpg'
import ss2 from '../public/img/ss2.jpg'
import ss3 from '../public/img/ss3.png'

export default function Mobile() {

    const apps = [
        {
            frontImg: reactCard,
            backImg: ss1,
            title: 'Chance al Chile',
            language: 'JS',
            technologies: 'React Native, JS, Neo4j, NodeJS, Express',
            description: 'Graph based recommendation engine and mobile application to connect companies with young tantented students.',
            link: 'https://github.com/ElGutiz/PROYECTO-HCI'
        },
        {
            frontImg: flutterCard,
            backImg: ss2,
            title: 'PostMP3 mobile',
            language: 'Dart',
            technologies: 'Flutter, PostgreSQL, MongoDB, NodeJS, Express',
            description: 'Music mobile app. Reproduces music and algo generate analytic reposts for administrator users.',
            link: 'https://github.com/wsaldana/PostMP3'
        },
        {
            frontImg: androidCard,
            backImg: ss3,
            title: 'Survey App',
            language: 'Java',
            technologies: 'Android Studio, SQLite',
            description: "Tracks the user's feelings and daily activities to recommend him some activities and enhace the user proactivity.",
            link: 'https://github.com/wsaldana/SurveyAppSQLite'
        }
    ]

    return (
        <div>
        <div className="container" id="container1">
            <h2>MOBILE APPS PROJECTS</h2>
            <h3>I got some ace up my sleeve.</h3>
            <p>Pick a card.</p>
        </div>
        <div className="container-fluid" id="container2">
            <div className="container cardGroup justify-content-center">
                <div className='row' id='scrollableRow'>
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
