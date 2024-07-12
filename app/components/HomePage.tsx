import Image from "next/image";

export default function HomePage() {
    return (
        <div className="HomePage">
            <section className="flex">
                <div>
                    <h1>Welcome to Doggy Match !</h1>
                    <p className="flex flex-col gap-4 font-bold test-lg ">
                        <span>We are here to help you find the Perfect dog fot you.</span>
                        <span>We know how much trouble is to grt laid .</span>
                    </p>
                </div>
                <div>
                    <Image
                        src="/dog.jpg"
                        alt=""
                        width={200}
                        height={500}
                    />
                </div>
            </section>
        </div>
    )
}