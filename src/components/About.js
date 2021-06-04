import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Bar } from 'react-chartjs-2';
import '../styles/about.scss';
import '../styles/sectionComponent.scss';

export default function About() {

    const { ref, inView, entry } = useInView({
        threshold: 0.5,
    });

    const data = {
        labels: ['Java', 'Python', 'JS', 'PHP', 'SQL', 'C#'],
        datasets: [{
            label: 'Top programming languages skills',
            data: inView ? [10, 10, 9, 8, 7, 6] : [0, 0, 0, 0, 0, 0],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

    return (
        <div className="container">
            <h2>SKILLS</h2>
            <h3>Grab a cup of coffe and let's talk about me!</h3>
            <ul>
                <li>Computer Science Engineering - UVG</li>
                <li>Some stuff</li>
                <li>More stuff</li>
            </ul>
            <div className='container'>
                <div className='row'>
                    <div ref={ref} className='col-lg-12' id="chartContainer">
                        <Bar
                            data = { data }
                            options={{ maintainAspectRatio: false }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}