import React, { useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { WebProjects, GameProjects } from "../util/Content";
import { useMediaQuery } from "react-responsive";
import Portfolio from "./Portfolio";
import "../styles//HorizontalSection.css";

export type ProjectProps = {
    img : string,
    alt : string,
    projectName : string,
    live? : string,
    youtube? : string,
    github? : string,
    detailedViewLink : string
}

export type PortfolioProps = {
    name : string,
    projects : ProjectProps[]
}

function HorizontalSection() {

    const isLaptop = useMediaQuery({ query: "(min-width: 1280px) and (max-width: 1366px)"})
    const isDesktop = useMediaQuery({query: '(min-width: 1366px)'})

    const [transformVar, setTransformVar] = useState(isDesktop ? "-56%" : isLaptop ? "-60%" : "-56%");

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", transformVar])
    return(
    <section ref={targetRef} className="sectionContainer">
        <div className="scrollable" id="projects">
            <motion.div style={{ x }} className="motionClass">
                <Portfolio name="Web Portfolio" projects={WebProjects}/>
                <Portfolio name="Game Portfolio" projects={GameProjects}/>
            </motion.div>
        </div>
    </section>
    )
}

export default HorizontalSection;