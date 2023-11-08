"use client"
import React, {useState, useRef} from "react";
import ProjectCard from "@/app/components/ProjectCard";
import ProjectTag from "@/app/components/ProjectTag";
import {motion, useInView} from "framer-motion";

const PROJECT_DATA = [
    {
        id: 1,
        title: "Random",
        description: "Project 1 description",
        image: "/images/projects/1.png",
        tag: ["all", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "TicTacToe",
        description: "Project 2 description",
        image: "/images/projects/2.png",
        tag: ["all", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "EquipMaint",
        description: "Project 3 description",
        image: "/images/projects/3.jpg",
        tag: ["all", "mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Upcoming",
        description: "Project 4 description",
        image: "/images/projects/4.png",
        tag: ["all", "web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "FixCyprus",
        description: "Project 5 description",
        image: "/images/projects/5.jpg",
        tag: ["all", "mobile"],
        gitUrl: "/",
        previewUrl: "/"
    },
]


const ProjectSection = () => {
    const [tag, setTag] = useState('all');
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = PROJECT_DATA.filter(project => project.tag.includes(tag))

    const cardVariants = {
        initial: {y: 50, opacity: 0},
        animate: {y: 0, opacity: 1}
    }

    return (
        <section>
            <h2 className={"text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12"}>
                My Projects
            </h2>

            <div className={"text-white flex flex-row justify-center items-center gap-2 py-6 "}>
                <ProjectTag
                    name={'All'}
                    onClick={() => handleTagChange('all')}
                    isSelected={tag === 'all'}
                />
                <ProjectTag
                    name={'Web'}
                    onClick={() => handleTagChange('web')}
                    isSelected={tag === 'web'}
                />
                <ProjectTag
                    name={'Mobile'}
                    onClick={() => handleTagChange('mobile')}
                    isSelected={tag === 'mobile'}
                />
            </div>

            <ul ref={ref} className={"grid md:grid-cols-3 gap-8 md:gap-12"} >
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial={"initial"}
                        animate={isInView? "animate": "initial"}
                        transition={{duration: 0.3, delay: index* 0.4}}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imageUrl={project.image}
                            tags={project.tag}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>

        </section>)
}

export default ProjectSection