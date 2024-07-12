import HomePage from "./HomePage";
import Login from "./Login";

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <section>
                <HomePage />
            </section>
            <div className="w-full">
                <section>
                    Info
                </section>

                <section>
                    ABpout
                </section>

                <section id="Login">
                    <Login />
                </section>
            </div>
        </div>
    )
} 