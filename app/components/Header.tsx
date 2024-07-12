'use client'

import Image from 'next/image';
import { useRouter , usePathname} from 'next/navigation';


export default function Header() {

    const router = useRouter();
    const pathname = usePathname();

    async function scrollTo() {

        if(pathname !== "/"){
            router.push("/");
            await new Promise(r => pathname !== "/" && setTimeout(r, 100));
        }
        

        let element = document.getElementById("Login");
        element?.scrollIntoView({ behavior: "smooth" });

    }


    return (
        <header className="Header flex justify-between p-8 font-bold">
            <div className="flex items-center gap-6">
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
                <a href="/about">About</a>
                <a href="/contact-us">Contact Us</a>
            </div>
            <div className="flex items-center gap-4 ">
                <button onClick={scrollTo}>Login</button>
                
            </div>
        </header>
    )
}