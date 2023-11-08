"use client"
import React from "react";

const ACHIEVEMENTS_LIST = [
    {
        metric: 'Projects',
        value: 5,
        postfix: '+'
    },
    {
        metric: 'Users',
        value: 5,
        postfix: 'K'
    },
    // {
    //     metric: 'Awards',
    //     value: 7,
    // },
    {
        metric: 'Years',
        value: 4,

    },

]

const AchievementsSection = () => {


    return (
        <div className={"py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"}>

            <div className={"border-[#33353F] border rounded-md py-8 px-17 flex flex-row items-center justify-between"}>
                {ACHIEVEMENTS_LIST.map((achievement, index) => {
                    return (
                        <div
                            key={index}
                            className={"flex flex-col items-center justify-center mx-4"}
                        >
                            <h2 className={"text-red text-4xl font-bold flex flex-row"}>
                                {achievement.hasOwnProperty('prefix') && achievement['prefix']}
                                {achievement.value}
                                {achievement.hasOwnProperty('postfix') && achievement['postfix']}
                            </h2>

                            <p className={"text-[#ADB7BE] text-base"}>
                                {achievement.metric}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AchievementsSection