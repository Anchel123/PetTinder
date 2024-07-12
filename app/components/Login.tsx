'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { cn } from "../utils/utils";

export default function Login() {

    const [hover, setHover] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className="Login" onSubmit={handelSubmit}>
            <p className="text-4xl py-5">Login</p>
            <div className="flex flex-col gap-2">
                <input
                    className={cn(email && "!border-2 scale-105")}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </div>
            <div className="relative flex flex-col gap-2">

                {password !== "" &&
                    <button
                        type="button"
                        className="absolute right-2 top-1/4  z-10"
                        onClick={() => setShowPassword(prev => !prev)}
                    >
                        {
                            showPassword ?
                                <EyeOff />
                                : <Eye />
                        }
                    </button>
                }

                <input
                    className={cn(password && "!border-2 scale-105")}
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </div>
            <div className="flex flex-col gap-6 items-center">
                <button type="submit" className="border border-black rounded hover:shadow-xl hover:border-2 hover:scale-105 p-4 w-2/3 ">
                    <p>Connect</p>
                </button>
                <button type="button" className="underline underline-offset-2">
                    <p>i {"don't"} have an account</p>
                </button>
            </div>
        </form>
    )
}