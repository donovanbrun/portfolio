import React from 'react';
import './Nav.css';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';

const Nav = () => {
    return (
        <div className="Nav" id="Nav">
            <a href="#Home" className="Icon"><HomeOutlinedIcon className="Icon"/></a>
            <a href="#About" className="Icon"><PersonOutlineOutlinedIcon className="Icon"/></a>
            <a href="#Stack" className="Icon"><WorkOutlineOutlinedIcon className="Icon"/></a>
            <a href="#Projects" className="Icon"><LibraryBooksOutlinedIcon className="Icon"/></a>
            <a href="#Contact" className="Icon"><ChatOutlinedIcon className="Icon"/></a>
        </div>
    );
}

export default Nav;