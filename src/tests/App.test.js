import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import App from '../components/App';
import Card from '../components/Card';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Mobile from '../components/Mobile';
import Navbar from '../components/Navbar';
import Web from '../components/Web';

describe('App', () => {
    beforeAll(() => {
      render(<App />);
    });
  
    it('Renders without crashing', () => {
        render(<App/ >, div)
    });

    it('Cards are mapped correctly', () => {
        const data = {
            frontImg: 'http://www.hearthstonetopdecks.com/wp-content/uploads/2014/06/card-back-default.png',
            backImg: 'https://www.monstersandcritics.com/wp-content/uploads/2019/08/PokeCard02.jpg',
            title: 'App de ejemplo',
            language: 'JS',
            technologies: 'React',
            description: 'Un texto de ejemplo para la prueba.',
            link: 'https://github.com/wsaldana'
        }
        render(<Card {...data} />, div)
    })
  
    afterAll(cleanup);
});

describe("Changing our button state", () => {
  test('Navbar buttons can be instanciated', () => {
      let tree = create(<App />);
      let instance = tree.getInstance();
      expect(instance.state.isActive).toBe(false)
      instance.handleClick();
      expect(instance.state.isActive).toBe(true);
      expect(tree.toJSON()).toMatchSnapshot()
  });
});

describe('About component', () => {
  test('About component renders with no crashing', () => {
    render(<About />);
  });
});

describe('Contact component', () => {
  test('Contact component renders with no crashing', () => {
    render(<Contact />);
  });
});

describe('Home title', () => {
  test('Home Title is rendered and animation doesnt hide it', () => {
    render(<Home />);
    expect(screen.getByText('WALTER')).toBeInTheDocument();
    expect(screen.getByText('SALDANA')).toBeInTheDocument();
    expect(screen.getByText("Hi! I'm")).toBeInTheDocument();
    expect(screen.getByText("WELCOME TO MY PORTFOLIO")).toBeInTheDocument();
  });
});

describe('Home component', () => {
  test('Home component renders with no crashing', () => {
    render(<Home />);
  });
});

describe('Mobile component', () => {
  test('Mobile component renders with no crashing', () => {
    render(<Mobile />);
  });
});

describe('Navbar component', () => {
  test('Navbar component renders with no crashing', () => {
    render(<Navbar />);
  });
});

describe('Web component', () => {
  test('Web component renders with no crashing', () => {
    render(<Web />);
  });
});