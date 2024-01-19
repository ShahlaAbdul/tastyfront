import React from 'react'
import "./style.scss"

function AboutTasty() {
    return (
        <section id='about'>
            <div className="about">
                <div className="about_left">
                    <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg.webp" alt="" />
                </div>
                <div className="about_right">
                    <span>ABOUT TASTY</span>
                    <h1>Our chef cooks the most delicious food for you</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                </div>
            </div>
        </section>
    )
}

export default AboutTasty