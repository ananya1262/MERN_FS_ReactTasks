import "../Task6.css";
import React, { useRef, useState } from 'react'
import { Link } from 'react-scroll';
import btnImg from '../assets/hireme.png';
function Task6()
{
    const Navbar=()=>{
        return(
            <nav className='navbar'>
                <div><b>Ananya Garg</b></div>
                <div className='desktopMenu'>
                   <Link className="desktopMenuListItem">HOME</Link>
                   <Link className="desktopMenuListItem">ABOUT</Link>
                   <Link className="desktopMenuListItem">PROJECTS</Link>
                   <Link className="desktopMenuListItem">CONTACT</Link>
                </div>

            </nav>
        );
    };

    const Intro=()=>{
        return(
           <section id='intro'>
                <div className="introcontent">
                    <span className="hello">Hello</span>
                    <span className="introText">I'm <span className="introName">Ananya</span><br />Full Stack Developer,ML enthusiast</span>
                    <p className="introPara">This is my portfolio website </p>
                    <Link><button className="btn"><img src={btnImg} alt="hire me" className="btnImg"/>Hire Me</button></Link>
                </div>
           </section>
        )
    };

    const Skills=()=>{
        return(
            <section id='skills'>
               <span className="skillTitle">About Me </span>
               <span className="skillDesc"></span>
            </section>
        )
    };
    
    return(
        <div>
            <Navbar />
            <Intro />
            <Skills/>
        </div>
    )
}
export default Task6