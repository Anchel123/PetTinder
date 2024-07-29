import Image from "next/image";

export default function PetCard({ pet }: { pet: any }) {
    return (
        <div className="flex gap-6 h-full w-full">
            <div>
                <p className="text-2xl">{pet.type}</p>
                <div className="flex flex-col gap-2 p-4">
                    <p className="font-medium">Name: <span className="font-normal">{pet.name}</span></p>
                    <p className="font-medium">Age: <span className="font-normal">{pet.age}</span></p>
                    <p className="font-medium">Sex: <span className="font-normal">{pet.sex}</span></p>
                    <p className="font-medium">{pet.description}</p>
                </div>
            </div>
            <Image src="" alt="" />
        </div>
    )
}