"use client"
import React, {useState, useTransition} from "react";
import Image from "next/image";
import TabButton from "@/app/components/TabButton";

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className={"list-disc pl-2"}>
                <li>Node.js</li>
                <li>ReactJS</li>
                <li>React Native</li>
                <li>Ionic/Angular </li>
                <li>Django</li>
            </ul>
        )
    },
    {
        title: 'Experience',
        id: 'experience',
        content: (
            <ul className={"list-disc pl-2"}>
                <li>Software engineer 1, KIOS</li>
                <li>Software engineer, PROTOIO</li>
                <li>Software engineer 1, KIOS</li>
            </ul>
        )
    },

    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className={"list-disc pl-2"}>
                <li>University of Cyprus</li>
                <li>Linneus University, Vaxjo Sweden</li>
            </ul>
        )
    },
]


const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
        <section className={"text-white"}>
            <div className={"md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16"}>

                <Image src={"/images/about.jpg"} width={500} height={500} alt={"Avatar me image"}/>
                <div className={"mt-4 md:mt-0 text-left flex flex-col h-full"}>
                    <h2 className={"text-4xl font-bold text-white mb-4"}>About Me</h2>
                    <p className={"text-base lg:text-lg"}>
                        As a Software Engineer of 4 years of experience, I am deeply passionate about applying
                        high-quality coding practices. My commitment lies in developing elegant and sustainable
                        solutions, while prioritizing clean, modular code structures. I am fostering open and effective
                        communication within cross-functional teams. My drive for excellence extends to my willingness
                        to continuously learn and adapt to diverse projects.
                    </p>
                    <div className={"flex flex-row justify-start mt-8"}>

                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === "skills"}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('experience')} active={tab === "experience"}>
                            Experience
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === "education"}>
                            Education
                        </TabButton>
                    </div>
                    <div className={"mt-8"}>
                        {TAB_DATA.find(t => t.id === tab)?.content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection