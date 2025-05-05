// About.js
import React from 'react';
import aboutbanner from "../assets/images/abt.png"
import "../assets/styles/About.css"

function About() {
return(
  <>
   <img src={aboutbanner} className='img-fluid' style={{marginTop:"140px"}} ></img>
    <div className="about-container">
      <section className="intro-text">
        <p><strong>Long before the stores, the spas and the website, even before</strong></p>
        <p><strong>that tiny spark of an idea came to be, there was love.</strong></p>
        <p><strong>The kind of love you can only share with a pet.</strong></p>
        <p><strong>The kind of love that makes us family.</strong></p>
      </section>

      <section className="vision">
        <h2>OUR VISION</h2>
        <p>
          When the right pet finds you, they can turn a house into a home,<br />
          bring people closer and fill our lives with endless love.
        </p>
      </section>

      <section className="mission">
        <h2>OUR MISSION</h2>
        <p>
          To create and curate, innovative products and services that<br />
          bring joy to pets and their families, one home at a time.
        </p>
      </section>
    </div> 
  </>
)
}

export default About;
