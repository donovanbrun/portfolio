import React from 'react';
import './Stack.css';

const Stack = () => {

    return (
        <div className="Stack container" id="Stack">
            <h1 className="Stack-Title">My Stack</h1>
            <div className="Stacks">
                <div className="Stack-Item">
                    <h2 className="Stack-Item-Title">Backend</h2>
                    <ul className="Stack-Item-List">
                        <li className="Stack-Item-List-Item">
                            <span className="Stack-Item-List-Item-Title">React</span>
                        </li>
                    </ul>
                </div>
                <div className="Stack-Item">
                    <h2 className="Stack-Item-Title">Frontend</h2>
                    <ul className="Stack-Item-List">
                        <li className="Stack-Item-List-Item">
                            <span className="Stack-Item-List-Item-Title">React</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Stack;