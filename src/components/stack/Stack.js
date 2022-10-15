import React from 'react';
import './Stack.css';

import ReactModal from 'react-modal';

export default function Stack() {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className='container'>
            <div className="Stack" id="Stack">
                <h1 className="StackTitle">What can I do?</h1>
                <div className='Stacks'>
                    <p className='StacksText1'>Build fullstack application</p>
                    <p className='StacksText1'>From the conception to the deployment</p>
                    <p className='StacksText2'>Using modern technologies</p>
                </div>
                <button className='StackBtn' onClick={openModal}>More about my hard skills</button>
            </div>

            <ReactModal className="Modal" isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h1>My hard skills</h1>
                <h2>Coming soon</h2>
            </ReactModal>
        </div>
    );
}