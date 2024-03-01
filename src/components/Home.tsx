import React from "react";
import "../styles/Home.css";
import { teamBuildPic } from "../util/Content";
import HorizontalSection from "./HorizontalSection";

function Home () {

    return(
    <div className="homeContainer">
        <Greetings/>
        <HorizontalSection/>
    </div>
    )
}

function Greetings() {
    return(
    <div className="greetings">
        <div>
            <h1>{"Vladislav Emerson Muondo"}</h1>
            <h3>{"yap yap yap yap yap yap yap yap yap"}</h3>
        </div>
        <img alt={teamBuildPic.alt} src={teamBuildPic.pic}/>
    </div>
    )
}

export default Home;