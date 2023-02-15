import React from 'react';
import{RiMenu3Line,RiCloseLin}from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.svg';
//BEM -> Block element modifier
const Navbar=()=>{
    return(<div className='gpt3_navbar'>
        <div className='gpt3_navbar-links'>
            <div className='gpt3_navbar-links_logo'>
                <img src={logo} alt="logo"/>
            </div>
            <div className='gtp3_navbar-links_container'>
                <p><a href='#home'>Home</a></p>
                <p><a href='#wgpt3'>What is GTP3?</a></p>
                <p><a href='#possibility'>Open AI</a></p>
                <p><a href='#features'>Case Studies</a></p>
                <p><a href='#blog'>Library</a></p>
            </div>
        </div>
        Navbar
    </div>)
}
export default Navbar