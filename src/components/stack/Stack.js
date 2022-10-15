import React from 'react';
import './Stack.css';

export default function Stack() {

    return (
        <div className="Stack container" id="Stack">
            <h1 className="StackTitle">What can I do?</h1>
            <div className='Stacks'>
                <p className='StacksText'>Build fullstack application</p>
                <p className='StacksText'>From the conception to the deployment</p>
            </div>
        </div>
    );
}