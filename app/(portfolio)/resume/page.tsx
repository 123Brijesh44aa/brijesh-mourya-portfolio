"use client"

import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";

const Resume = () => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '/resume/BrijeshMourya-Resume.pdf';
        link.download = 'BrijeshMourya-Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={"flex flex-col justify-between items-center gap-5"}>
            <div className={"flex flex-row justify-between items-center gap-16"}>
                <Button variant={"project"} onClick={handleDownload}>Download Resume</Button>
                <h1 className={"text-5xl text-black font-black"}>Resume</h1>
            </div>
            <div className={"w-full lg:w-[70%] ring-2"}>
                <Image className={"w-full"} src={"resume/BrijeshMourya-Resume.svg"} alt={"resume image"} width={100}
                       height={100}/>
            </div>
        </div>
    );
};

export default Resume;
