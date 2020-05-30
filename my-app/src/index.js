import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Intro from "./parts/2intro/Intro";
import About from "./parts/3about/About";
import Projects from "./parts/4projects/Projects"
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./parts/5Contact/Contact";

ReactDOM.render(
  <React.StrictMode>
    <Intro />
    <About />
    <Projects />
    <Contact />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
