import React from 'react';
import './Nav.css';

export default function Nav() {
    return (
        <div className="Nav" id="Nav">
            <a href="#Home" className="Icon">[Home]</a>
            <a href="#About" className="Icon">[About]</a>
            <a href="#Stack" className="Icon">[Stack]</a>
            <a href="#Projects" className="Icon">[Projects]</a>
            <a href="#Contact" className="Icon">[Contact]</a>
        </div>
    );
}