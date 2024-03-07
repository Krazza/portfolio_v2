import React from "react";
import "../styles/About.css"

function About () {
    return (
        <div className="about">
            <div className="aboutInfoBox">
                <h2>{"About me"}</h2>
                <div className="textBorder"/>
                <section>
                    <p>{"I was born in Saint-Petersburg, Russia, and ever since middle school I constantly tinkered with software. My software pursuit started with BASIC during highschool, transitioned to studying C# and C++ during university, and lead to visual programming using Blueprints in Unreal Engine at my first software development job."}</p>
                    <p>{"My career started with a Game Designer position for a mobile gaming project, where I learned a lot about the reality of software development, problem-solving, and being a proactive member of a team. After spending a couple of years working on games, I sought to broaden my capabilities as a software developer and picked up web development as a hobby. The hobby turned into a vocational degree at Business College Helsinki, and now I am looking to start developing apps commercially."}</p> 
                    <p>{"All in all, I love exploring new tools and solutions, and usually, it doesn't take me long to pick up a new instrument and put it to good use."}</p>
                </section>
            </div>
        </div>
    )
}

export default About;