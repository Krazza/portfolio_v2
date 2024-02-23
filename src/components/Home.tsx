import React from "react";
import "../styles/Home.css";

import Portfolio from "./Portfolio";

function Home () {
    return(
        <main className="homeContainer">
            <h1>{"Which portfolio interests you?"}</h1>
            <div className="menuContainer">
                <section>
                    <h2>{"web"}</h2>
                </section>
                <section>
                    <h2>{"game"}</h2>
                </section>
            </div>
            <Portfolio/>
        </main>
    )
}

export default Home;