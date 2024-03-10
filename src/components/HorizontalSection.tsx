import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Portfolio from "./Portfolio";
import "../styles//HorizontalSection.css";

export type ProjectProps = {
    img : string,
    alt : string,
    projectName : string,
    live? : string,
    youtube? : string,
    github? : string
}

export type PortfolioProps = {
    name : string
}

function HorizontalSection() {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-56%"])
    return(
    <section ref={targetRef} className="sectionContainer">
        <div className="scrollable">
            <motion.div style={{ x }} className="motionClass">
                <Portfolio name="Game Portfolio"/>
                <Portfolio name="Web portfolio"/>
            </motion.div>
        </div>
    </section>
    )
}

export default HorizontalSection;