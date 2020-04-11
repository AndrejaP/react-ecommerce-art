import React from 'react';
import Title from "./Title";
import painter from "./me.png";

export default function About() {
    return (
        <div className="py-5">
            <div className="container">
                <Title name="" title="About" /> 
                    <div className="row">
                        <div className="col-10 mx-auto text-left pt-5 about">
                        <img src={painter} alt="the painter" className="painter"/>          
                        <p>
                            Hi! I'm Andreja. Welcome to my little shop.<br/><br/>
                            I'm a wannabe minimalist in pursuit of adventure, new experiences, wisdom, and skills.
                            I find pleasure in learning and understanding stuff. I have a problem with cold weather 
                            so I travel south in the winter when I can. <br/><br/>
                            I started my painting adventure when I was 35. As opposed to many other things I've tried, 
                            painting came easily to me and I was happy with my creations from the very beginning. 
                            I like painting in oils because they dry slowly which lets me relax, take my time 
                            and even work on multiple paintings at the same time. Also, blending 
                            is easy with oils. When I want to finish a painting in one go,
                            I use acrylics. I like painting animals, esepcially poultry. I love the moment when they come alive, as if they are looking
                            at me from the canvas. I like experimenting with styles and everything inspires me. 
                            I have a lot of ideas but not so much time for painting lately. I will paint more and 
                            on big canvases when I buy a little gallery and my paintings get a home.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
