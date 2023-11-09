"use client"
import Link from "next/link";
import React from "react";
import GithubIcon from "../../../public/iconmonstr-github-1.svg"
import LinkedInIcon from "../../../public/iconmonstr-linkedin-3.svg"
import Image from "next/image";

{/* eslint-disable react/no-unescaped-entities */}

const EmailSection = () => {

    const handleSubmit = async () => {
        console.log('send email')
    }

    return <>
        <section className={"grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"}>
            <div className={"bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute -left-4 top-3/4 transform -translate-x-1/2 -translate-y-1/2"}></div>
            <div>
                <h5 className={"text-xl font-bold text-white my-2"}>Let's Connect</h5>
                <p className={"text-[#ADB7BE] mb-4 max-w-md"}>
                    {" "}
                    I'm currently looking for new opportunities, my inbox is
                    always open. Whether you have a question or just want to say hi, I'll try
                    my best to get back to you!

                </p>
                <div className={"socials flex flex-row gap-2"}>
                    <Link href={"github.com"}>
                        <Image src={GithubIcon} alt={"Github icon"}/>
                    </Link>
                    <Link href={"linkedin.com"}>
                        <Image src={LinkedInIcon} alt={"LinkedIn icon"}/>
                    </Link>
                </div>
            </div>
            <div className={"z-10"}>
                <form className={"flex flex-col"} onSubmit={handleSubmit}>
                    <div className={"mb-6"}>
                        <label
                            htmlFor={'email'}
                            className={"text-white block mb-2 text-sm font-medium"}
                        >
                            Your email
                        </label>
                        <input
                            name={'email'}
                            type={'email'}
                            id={'email'}
                            required
                            className={"bg-[#18191E] border border-[#33333F] placeholder-[#9Ca2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
                            placeholder={'jacob@mail.com'}
                        />
                    </div>

                    <div className={"mb-6"}>
                        <label
                            htmlFor={'subject'}
                            className={"text-white block mb-2 text-sm font-medium"}
                        >
                            Subject
                        </label>
                        <input
                            name={'subject'}
                            type={'text'}
                            id={'subject'}
                            required
                            className={"bg-[#18191E] border border-[#33333F] placeholder-[#9Ca2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
                            placeholder={'Job offer'}
                        />
                    </div>

                    <div className={"mb-6"}>
                        <label
                            htmlFor={'message'}
                            className={"text-white block mb-2 text-sm font-medium"}
                        >
                            Message
                        </label>
                        <textarea
                            name={'message'}
                            id={'message'}
                            className={"bg-[#18191E] border border-[#33333F] placeholder-[#9Ca2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"}
                            placeholder={ "Let's talk about..."}
                        />
                    </div>
                    <button
                        type={'submit'}
                        className={"bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"}
                    >
                        Send Message

                    </button>
                </form>
            </div>
        </section>
    </>
}

export default EmailSection

