import React from 'react';
//import {CTA,Brand,Navbar} from './components';
import { Footer,Blog,Possibility,Features,WhatGPT3,Header } from './containers';
import Article from './components/article/Article';
import Brand from './components/brand/Brand' ;
import Cta from './components/cta/Cta';
import Feature from './components/feature/Feature';
import Navbar from './components/navbar/Navbar';
import './App.css';
const App=()=>{
    return(<div>
            <div className='App'>
            <div className='gradient_bg'>
                <Navbar/>
                <Header/>
            </div>
            <Brand/>
            <WhatGPT3/>
            <Features/>
            <Possibility/>
            <Cta/>
            <Blog/>
            <Footer/>
        </div>
    </div>)
}
export default App