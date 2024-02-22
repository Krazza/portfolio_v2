import React from "react";
import "../styles/Home.css";

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
        </main>
    )
}

export default Home;