'use client'

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { INSIDE_LANDING_PAGE } from "../utils/utils";
import { useRouter } from "next/navigation";

export default function LandingPage() {


    const router = useRouter();
    const [counter, setCounter] = useState(0);
    const section = ["landing", "about", "login"];

    function login() {  
        router.push("login")
    }  
    
    function signUp() {  
        router.push("login")
    }  


    return (

        <div className="LandingPage">
            <Tabs className="flex justify-center items-center h-full grow" value={section[counter]}>
                <TabsContent value="landing">
                    <section>
                        <h1>
                            Welcome to <span className="">{"PeTinder!"}</span>
                        </h1>
                    </section>
                </TabsContent>
                <TabsContent value="about">
                    <section>
                        <p>
                            <p>We are here to help you find the Perfect Pet for you, and the perfect owner for your Pet.</p>
                            <p>Want to adopt a Cat, Dog, Bird?</p>
                            <p>Want to hand over an animal for adoption?</p>
                            <p>This is the place for you to do it in the most professional and reliable way.</p>
                        </p>
                    </section>
                </TabsContent>
                <TabsContent value="login">
                    <section className="flex flex-col  gap-20 justify-center items-center">

                        <span className="text-8xl">Sooooo......</span>
                        <p className="text-5xl font-bold" > &nbsp; Ready to join the family?</p>

                        <div className="flex gap-8">
                            <button onClick={login} className="HoverBoldButton">Login</button>
                            <button onClick={signUp} className="HoverBoldButton">Sign Up</button>
                        </div>

                    </section>
                </TabsContent>
            </Tabs>

            <div className="w-40">
                <button className="border border-black p-6 rounded hover:scale-110" onClick={() => setCounter((counter + 1) % section.length)} ><ChevronRight /></button>
            </div> 

        </div>
    );
}