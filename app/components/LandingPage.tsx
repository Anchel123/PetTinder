'use client'

import Image from "next/image";
import Login from "./Login";
import { useState } from "react";

function Section({ section }: { section: string }) {

    if (section === "grit") {
        return (
            <section>
                <h1 className="w-full">
                    Welcome to <span className="">{"PeTinder!"}</span>
                </h1>
            </section>
        );
    }

    if (section === "about") {
        return (
            <section>
                <p className="">
                    <p>We are here to help you find the Perfect Pet for you, and the perfect owner for your Pet.</p>

                    <p>Want to adopt a Cat, Dog, Bird?</p>
                    <p>Want to hand over an animal for adoption?</p>
                    <p>This is the place for you to do it in the most professional and reliable way.</p>
                </p>
            </section>
        );
    }

    if (section === "login") {
        return (
            <section>
                <p>So.. Ready to join the family?</p>
                <button>Login</button>
                <button>Sing Up</button>
            </section>
        );
    }

    return null;
}

export default function LandingPage() {

    const section = ["grit", "about", "login"];
    const [sectionCounter, setSectionCounter] = useState(0);

    function changeSection() {
        setSectionCounter((prevCounter) => (prevCounter + 1) % section.length);
    }

    
    return (
        <div className="LandingPage">

            <section className="Hero">
                <Section section={section[sectionCounter]} />
                <button onClick={changeSection} >
                
                   <Image
                        src="/images/arrow.png"
                        alt="Arrow"
                        width={50}
                        height={50}
                    />
                    
                </button>
            </section>

            <section>
                About
            </section>

            <section className="w-1/3" id="Login">
                <Login />
            </section>
        </div>
    );
}