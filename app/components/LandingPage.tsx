import HomePage from "./HomePage";
import Login from "./Login";

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <section>
                <HomePage />
            </section>

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
    )
} 