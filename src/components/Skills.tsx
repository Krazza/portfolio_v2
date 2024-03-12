import React from "react";
import "../styles/Skills.css"

function Skills () {
    return (
        <div className="skillsContainer">
            <div className="content">
                <section className="skillSection">
                    <h2>{"Skills 🧰"}</h2>
                    <div className="skills">
                        <div className="skillsCard FS">
                            <h3>{"Full Stack Development"}</h3>
                            <ul className="cardUL">
                                <li>{"HTML"}</li>
                                <li>{"CSS"}</li>
                                <li>{"JavaScript"}</li>
                                <li>{"TypeScript"}</li>
                                <li>{"React, Redux"}</li>
                                <li>{"Node.JS"}</li>
                                <li>{"MongoDB"}</li>
                                <li>{"FireStore"}</li>
                            </ul>
                        </div>
                        <div className="skillsCard GD">
                            <h3>{"Game Development"}</h3>
                            <ul className="cardUL">
                                <li>{"Unreal Engine, Blueprints"}</li>
                                <li>{"C++"}</li>
                                <li>{"Unity"}</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div className="divider"/>
                <section className="workSection">
                    <h2>{"Experience 🏢"}</h2>
                    <div className="expcontainer">
                        <div className="position GDP">
                            <h3>{"Game Designer at Space Sauce"}</h3>
                            <p>{"2020 - 2022"}</p>
                            <ul className="workUL">
                                <li>{"Gameplay mechanics design"}</li>
                                <li>{"Prototyping (Blueprints)"}</li>
                                <li>{"UX & UI design"}</li>
                            </ul>
                        </div>
                        <div className="position FE">
                            <h3>{"Front-end intern at Tutors Oy"}</h3>
                            <p>{"2023 - 2024"}</p>
                            <ul className="workUL">
                                <li>{"Writing and maintaining front-end code"}</li>
                                <li>{"UI development"}</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Skills;