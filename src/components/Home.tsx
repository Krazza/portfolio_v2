import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Portfolio from "./Portfolio";
import "../styles/Home.css";

function Home () {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])

    return(
        <main ref={targetRef} className="homeContainer">
            <div className="horizontalContainer">
                <motion.div style={{ x }} className="motionClass">
                    <Portfolio/>
                    <div>
                        <h1>{"Which portfolio interests you?"}</h1>
                        <div className="menuContainer">
                            <section>
                                <h2>{"web"}</h2>
                            </section>
                            <section>
                                <h2>{"game"}</h2>
                            </section>
                        </div>
                    </div>
                    <Portfolio/>
                </motion.div>
            </div>
        </main>
    )
}

export default Home;