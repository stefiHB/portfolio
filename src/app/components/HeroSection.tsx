"use client"
import React from "react";
import Image from "next/image"
import {TypeAnimation} from "react-type-animation";
import  {motion} from "framer-motion";

const HeroSection = () => {

    return (
        <section className={"lg:py-16"}>
            <div className={"grid grid-cols-1 sm:grid-cols-12"}>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.7}}
                    className={"col-span-8 place-self-center text-center sm:text-left justify-self-start"}
                >
                    <h1 className={'text-white mb-2 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'}>
                        <span className={"text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 "}>Hello, {" I'm "} </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                'Kassi', 1000,
                                'React Developer', 1000,
                                'JS Enthusiast', 1000,
                            ]}
                            wrapper="span"
                            speed={20}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className={"text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"}>
                        Software Engineer, deeply passionate about applying high-quality coding practices. Developing elegant and sustainable solutions, while prioritizing clean, modular code structures.                </p>
                    <div>
                        <button
                            className={"px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-600 hover:bg-slate-200 text-white"}>Hire
                            Me
                        </button>
                        <button
                            className={"px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"}>
                            <span className={"block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-3"}>Download CV</span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.7}}
                    className={"col-span-4 place-self-center mt-4 lg:mt-0"}
                >
                    <div className={"rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative"}>
                        <Image
                            className={"absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"}
                            src={"/images/avatar.svg"}
                            alt={"Avatar image"}
                            width={300}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection