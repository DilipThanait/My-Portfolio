import React from "react";
import './Hero.css'
import profile_img from '../../assets/profile_img.svg'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero =() => {
    return(
        <div id="home" className="hero">
            <img src={profile_img} alt=""/>
            <h1><span>I'm Tek Thanait, </span> Frontend developer based in Nepal.</h1>
            <p>I am a frontend developer from Nawalpur, Nepal with 10 years of experience in multiple companies like Microsoft,Tesla and Apple.</p>
            <div className="hero-action">
                <div className="hero-connect"> <AnchorLink className="anchor-link" href="#contact">Connect with me</AnchorLink></div>
                <hero className="hero-resume">My resume</hero>
            </div>

        </div>
    )
}
export default Hero