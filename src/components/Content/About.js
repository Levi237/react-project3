import React from 'react';

const  About = () => 
    <div className="aboutInfoCenter">
        <h1>Levi Eiko Winans</h1>
        
        <p>Hello, my name is Levi, and I am a full stack software developer who specializes in React and has a knack for CSS. My experience at General Assembly has given me the skills to understand an array of languages including Javascript and Python.</p>
        <p>I found a particular joy in creating this site because of my own passion for the outdoors.  All picutres were taking by me during my travels (aside from this one taken of me by a friend during a backpacking trip in Sequoia).</p>
        <p>For this site to function in project 3, I had to create a program that would sort and filter through two nps.gov endpoints which generated a list of alerts designating notifications such as closed park areas.  Once the user saves the data of the closed park, the website checks to make sure the data is still on the alert api; if it is not longer on the alert api, it marks the park as “Open”.  To do this, I created a way to identify those removed parks and concurrently change the status of the closure.  This project required full stack usage of MERN with full CRUD function.</p>
        <p>I decided to continue improving this website for project 5, creating a more complete experience and integarting my interest in astronomy using Virtual Sky.  I had a lot of fun working with this api and I hope you enjoy it as well!</p>
        <br />
        <section><strong>Photoshop | HTML5 | CSS3 | Javascript | React | Express | EJS | Node.js | Mongoose | MongoDB | JSON</strong></section>
        <br />
        <section>  
           <span>LeviEiko@gmail.com | 646.206.8777</span><br/><br/>
        <a href="mailto:levieiko@gmail.com"><img alt="email" src="email.png" /></a> 
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Levi237"><img alt="github" src="github.png" /></a> 
        <a target="_blank" rel="noopener noreferrer" href="http://www.linkedin.com/in/leviwinans"><img alt="linkedin" src="linkedin.png" /></a>
        </section> <br />

    </div>

export default About