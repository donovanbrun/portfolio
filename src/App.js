import './App.css';
import React from "react";
import About from './components/about/About';
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Nav from "./components/nav/Nav";
import Stack from "./components/stack/Stack";
import Contact from "./components/contact/Contact";

function App() {
    return (
        <div className="App">
            <Nav />
            <Home />
            <About />
            <Stack />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
