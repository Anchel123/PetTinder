import Hero from "./Hero";
import Login from "./Login";

export default function LandingPage() {
    return (
        <div className="LandingPage">
            <section className="w-full pr-80">
                <Hero />
            </section>

            <section className="pl-80">
                <p className="flex flex-col gap-8 justify-end font-bold test-lg  ">
                    <span>We are here to help you find the Perfect Pet for you, and the perfect owner for the Pet.</span>
                    <span>Want to adopt a Cat, Dog, Bird?</span>
                    <span>Want to hand over an animal for adoption?</span>
                    <span>
                        This is the place for you to do it in the most professional and reliable way, &nbsp; So.. Ready to join the family?
                    </span>
                </p>
            </section>

            <section>
                ABpout
            </section>

            <section className="w-1/3" id="Login">
                <Login />
            </section>

        </div>
    )
} 